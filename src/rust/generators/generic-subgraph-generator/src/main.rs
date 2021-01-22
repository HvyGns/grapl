mod generator;
mod models;
mod tests;

use grapl_service::decoder::ZstdJsonDecoder;
use grapl_service::serialization::SubgraphSerializer;
use sqs_executor::cache::{NopCache};
use tracing::*;

use grapl_config::{event_caches};


use crate::generator::GenericSubgraphGenerator;

use grapl_config::env_helpers::s3_event_emitters_from_env;
use grapl_config::env_helpers::FromEnv;
use grapl_observe::metric_reporter::MetricReporter;
use rusoto_core::Region;
use rusoto_s3::S3Client;
use rusoto_sqs::SqsClient;
use sqs_executor::event_retriever::S3PayloadRetriever;
use sqs_executor::s3_event_emitter::S3ToSqsEventNotifier;
use sqs_executor::{make_ten, time_based_key_fn};

use std::str::FromStr;

use std::{io::Stdout,
          time::Duration};

use graph_generator_lib::run_graph_generator;
use grapl_config::event_cache;
use grapl_observe::metric_reporter::MetricReporter;
use sqs_lambda::{cache::NopCache,
                 sqs_completion_handler::CompletionPolicy,
                 sqs_consumer::ConsumePolicyBuilder};
use tracing::*;

use crate::{generator::GenericSubgraphGenerator,};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (env, _guard) = grapl_config::init_grapl_env!();

    info!("Starting generic-subgraph-generator");

    let sqs_client = SqsClient::from_env();

    let cache = &mut event_caches(&env).await;

    let generic_subgraph_generator =
        &mut make_ten(async { GenericSubgraphGenerator::new(NopCache {}) }).await;

    let serializer = &mut make_ten(async { SubgraphSerializer::default() }).await;
    let s3_emitter =
        &mut s3_event_emitters_from_env(&env, time_based_key_fn, S3ToSqsEventNotifier::from(&env))
            .await;

    let s3_payload_retriever = &mut make_ten(async {
        S3PayloadRetriever::new(
            |region_str| S3Client::new(Region::from_str(&region_str).expect("region_str")),
            ZstdJsonDecoder::default(),
            MetricReporter::new(&env.service_name),
        )
    })
    .await;

    info!("Starting process_loop");
    sqs_executor::process_loop(
        grapl_config::source_queue_url(),
        grapl_config::dead_letter_queue_url(),
        cache,
        sqs_client.clone(),
        generic_subgraph_generator,
        s3_payload_retriever,
        s3_emitter,
        serializer,
        MetricReporter::new(&env.service_name),
    )
    .await;

    info!("Exiting");

    Ok(())
}

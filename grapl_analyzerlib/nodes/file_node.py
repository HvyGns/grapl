from copy import deepcopy
from typing import Optional, TypeVar, Mapping, Tuple, Any, List, cast

# noinspection Mypy
from pydgraph import DgraphClient

from grapl_analyzerlib.nodes.comparators import Cmp, PropertyFilter, StrCmp, _str_cmps, IntCmp, _int_cmps
from grapl_analyzerlib.nodes.queryable import Queryable
from grapl_analyzerlib.nodes.types import PropertyT, Property
from grapl_analyzerlib.nodes.viewable import Viewable, EdgeViewT, ForwardEdgeView, ReverseEdgeView

T = TypeVar("T")


class _FileQuery(Queryable[T]):
    def __init__(
            self,
    ) -> None:
        super(_FileQuery, self).__init__(_FileView)
        self._file_path = []    # type: List[List[Cmp[str]]]
        self._asset_id = []    # type: List[List[Cmp[str]]]
        self._file_extension = []    # type: List[List[Cmp[str]]]
        self._file_mime_type = []    # type: List[List[Cmp[str]]]
        self._file_size = []    # type: List[List[Cmp[int]]]
        self._file_version = []    # type: List[List[Cmp[str]]]
        self._file_description = []    # type: List[List[Cmp[str]]]
        self._file_product = []    # type: List[List[Cmp[str]]]
        self._file_company = []    # type: List[List[Cmp[str]]]
        self._file_directory = []    # type: List[List[Cmp[str]]]
        self._file_inode = []    # type: List[List[Cmp[int]]]
        self._file_hard_links = []    # type: List[List[Cmp[str]]]
        self._signed = []    # type: List[List[Cmp[str]]]
        self._signed_status = []    # type: List[List[Cmp[str]]]
        self._md5_hash = []    # type: List[List[Cmp[str]]]
        self._sha1_hash = []    # type: List[List[Cmp[str]]]
        self._sha256_hash = []    # type: List[List[Cmp[str]]]

        self._creator = None  # type: Optional['_ProcessQuery[T]']
        self._writers = None  # type: Optional['_ProcessQuery[T]']
        self._readers = None  # type: Optional['_ProcessQuery[T]']
        self._deleter = None  # type: Optional['_ProcessQuery[T]']
        self._spawned_from = None  # type: Optional['_ProcessQuery[T]']


    def with_file_path(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_path.extend(_str_cmps('file_path', eq, contains, ends_with))
        return self

    def with_asset_id(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._asset_id.extend(_str_cmps('asset_id', eq, contains, ends_with))
        return self

    def with_file_extension(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_extension.extend(_str_cmps('file_extension', eq, contains, ends_with))
        return self

    def with_file_mime_type(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_mime_type.extend(_str_cmps('file_mime_type', eq, contains, ends_with))
        return self

    def with_file_size(
            self,
            eq: Optional['IntCmp'] = None,
            gt: Optional['IntCmp'] = None,
            lt: Optional['IntCmp'] = None,
    ) -> 'FileQuery':
        self._file_size.extend(_int_cmps('file_size', eq, gt, lt))
        return self

    def with_file_version(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_version.extend(_str_cmps('file_version', eq, contains, ends_with))
        return self

    def with_file_description(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_description.extend(_str_cmps('file_description', eq, contains, ends_with))
        return self

    def with_file_product(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_product.extend(_str_cmps('file_product', eq, contains, ends_with))
        return self

    def with_file_company(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_company.extend(_str_cmps('file_company', eq, contains, ends_with))
        return self

    def with_file_directory(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_directory.extend(_str_cmps('file_directory', eq, contains, ends_with))
        return self

    def with_file_inode(
            self,
            eq: Optional['IntCmp'] = None,
            gt: Optional['IntCmp'] = None,
            lt: Optional['IntCmp'] = None,
    ) -> 'FileQuery':
        self._file_inode.extend(_int_cmps('file_inode', eq, gt, lt))
        return self

    def with_file_hard_links(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._file_hard_links.extend(_str_cmps('file_hard_links', eq, contains, ends_with))
        return self

    def with_signed(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._signed.extend(_str_cmps('signed', eq, contains, ends_with))
        return self

    def with_signed_status(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._signed_status.extend(_str_cmps('signed_status', eq, contains, ends_with))
        return self

    def with_md5_hash(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._md5_hash.extend(_str_cmps('md5_hash', eq, contains, ends_with))
        return self

    def with_sha1_hash(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._sha1_hash.extend(_str_cmps('sha1_hash', eq, contains, ends_with))
        return self

    def with_sha256_hash(
            self,
            eq: Optional['StrCmp'] = None,
            contains: Optional['StrCmp'] = None,
            ends_with: Optional['StrCmp'] = None,
    ) -> 'FileQuery':
        self._sha256_hash.extend(_str_cmps('sha256_hash', eq, contains, ends_with))
        return self

    def with_spawned_from(self, spawned_from_query: Optional['ProcessQuery'] = None) -> 'FileQuery':
        if spawned_from_query is None:
            spawned_from = ProcessQuery()  # type: ProcessQuery
        else:
            spawned_from = deepcopy(spawned_from_query)
        spawned_from._bin_file = self
        self._spawned_from = spawned_from
        return self

    def with_creator(self, creator_query: Optional['ProcessQuery'] = None) -> 'FileQuery':
        if creator_query is None:
            creator = ProcessQuery()  # type: ProcessQuery
        else:
            creator = deepcopy(creator_query)
        creator._created_files = self
        self._creator = creator
        return self

    def with_readers(self, reader_query: Optional['ProcessQuery'] = None) -> 'FileQuery':
        if reader_query is None:
            reader = ProcessQuery()  # type: ProcessQuery
        else:
            reader = deepcopy(reader_query)
        reader._read_files = self
        self._readers = reader
        return self


    def _get_unique_predicate(self) -> Optional[Tuple[str, 'PropertyT']]:
        return 'file_path', str

    def _get_node_type_name(self) -> Optional[str]:
        return None

    def _get_property_filters(self) -> Mapping[str, 'PropertyFilter[Property]']:
        _prop_filters = {
            'file_path': self._file_path,
            'asset_id': self._asset_id,
            'file_extension': self._file_extension,
            'file_mime_type': self._file_mime_type,
            'file_size': self._file_size,
            'file_version': self._file_version,
            'file_description': self._file_description,
            'file_product': self._file_product,
            'file_company': self._file_company,
            'file_directory': self._file_directory,
            'file_inode': self._file_inode,
            'file_hard_links': self._file_hard_links,
            'signed': self._signed,
            'signed_status': self._signed_status,
            'md5_hash': self._md5_hash,
            'sha1_hash': self._sha1_hash,
            'sha256_hash': self._sha256_hash,
        }

        prop_filters = {p[0]: p[1] for p in _prop_filters if p[1]}
        return cast('Mapping[str, PropertyFilter[Property]]', prop_filters)

    def _get_forward_edges(self) -> Mapping[str, "Queryable[T]"]:
        return {}

    def _get_reverse_edges(self) -> Mapping[str, Tuple["Queryable[T]", str]]:
        reverse_edges = {
            '~created_files': (self._creator, 'creator'),
            '~wrote_files': (self._writers, 'writers'),
            '~readers': (self._readers, 'readers'),
            '~deleter': (self._deleter, 'deleter'),
            '~bin_file': (self._spawned_from, 'spawned_from'),
        }

        filtered = {re[0]: re[1] for re in reverse_edges.items() if re[1][0] is not None}

        return cast('Mapping[str, Tuple[Queryable[T], str]]', filtered)

    def query(
            self,
            dgraph_client: DgraphClient,
            contains_node_key: Optional[str] = None,
            first: Optional[int] = 1000,
    ) -> List['FileView']:
        res = self._query(
            dgraph_client,
            contains_node_key,
            first
        )
        return cast('List[FileView]', res)

    def query_first(
            self, dgraph_client: DgraphClient, contains_node_key: Optional[str] = None
    ) -> Optional['FileView']:
        res = self._query_first(dgraph_client, contains_node_key)
        return cast('Optional[FileView]', res)


class _FileView(Viewable[T]):
    def __init__(
            self,
            dgraph_client: DgraphClient,
            node_key: str,
            uid: str,
            file_path: Optional[str] = None,
            asset_id: Optional[str] = None,
            file_extension: Optional[str] = None,
            file_mime_type: Optional[str] = None,
            file_size: Optional[int] = None,
            file_version: Optional[str] = None,
            file_description: Optional[str] = None,
            file_product: Optional[str] = None,
            file_company: Optional[str] = None,
            file_directory: Optional[str] = None,
            file_inode: Optional[int] = None,
            file_hard_links: Optional[str] = None,
            signed: Optional[str] = None,
            signed_status: Optional[str] = None,
            md5_hash: Optional[str] = None,
            sha1_hash: Optional[str] = None,
            sha256_hash: Optional[str] = None,
            creator: Optional['_ProcessView[T]'] = None,
            writers: Optional[List['_ProcessView[T]']] = None,
            readers: Optional[List['_ProcessView[T]']] = None,
            deleter: Optional['_ProcessView[T]'] = None,
            spawned_from: Optional[List['_ProcessView[T]']] = None,
    ) -> None:
        super(_FileView, self).__init__(dgraph_client, node_key=node_key, uid=uid)

        self.dgraph_client = dgraph_client
        self.node_key = node_key
        self.uid = uid
        self.file_path = file_path
        self.asset_id = asset_id
        self.file_extension = file_extension
        self.file_mime_type = file_mime_type
        self.file_size = file_size
        self.file_version = file_version
        self.file_description = file_description
        self.file_product = file_product
        self.file_company = file_company
        self.file_directory = file_directory
        self.file_inode = file_inode
        self.file_hard_links = file_hard_links
        self.signed = signed
        self.signed_status = signed_status
        self.md5_hash = md5_hash
        self.sha1_hash = sha1_hash
        self.sha256_hash = sha256_hash

        self.creator = creator
        self.writers = writers or []
        self.readers = readers or []
        self.deleter = deleter
        self.spawned_from = spawned_from or []


    @staticmethod
    def _get_property_types() -> Mapping[str, "PropertyT"]:
        return {
            'file_path': str,
            'asset_id': str,
            'file_extension': str,
            'file_mime_type': str,
            'file_size': int,
            'file_version': str,
            'file_description': str,
            'file_product': str,
            'file_company': str,
            'file_directory': str,
            'file_inode': int,
            'file_hard_links': str,
            'signed': str,
            'signed_status': str,
            'md5_hash': str,
            'sha1_hash': str,
            'sha256_hash': str,
        }

    @staticmethod
    def _get_forward_edge_types() -> Mapping[str, "EdgeViewT[T]"]:
        return {}

    @staticmethod
    def _get_reverse_edge_types() -> Mapping[str, Tuple["EdgeViewT[T]", str]]:
        return {
            '~created_files': (_ProcessView, 'creator'),
            '~wrote_files': ([_ProcessView], 'writers'),
            '~readers': ([_ProcessView], 'readers'),
            '~deleter': (_ProcessView, 'deleter'),
        }

    def _get_properties(self) -> Mapping[str, 'Property']:
        props = {
            'node_key': self.node_key,
            'uid': self.uid,
            'file_path': self.file_path,
            'asset_id': self.asset_id,
            'file_extension': self.file_extension,
            'file_mime_type': self.file_mime_type,
            'file_size': self.file_size,
            'file_version': self.file_version,
            'file_description': self.file_description,
            'file_product': self.file_product,
            'file_company': self.file_company,
            'file_directory': self.file_directory,
            'file_inode': self.file_inode,
            'file_hard_links': self.file_hard_links,
            'signed': self.signed,
            'signed_status': self.signed_status,
            'md5_hash': self.md5_hash,
            'sha1_hash': self.sha1_hash,
            'sha256_hash': self.sha256_hash,
        }

        return {p[0]: p[1] for p in props.items() if p[1] is not None}

    def _get_forward_edges(self) -> 'Mapping[str, ForwardEdgeView[T]]':
        return dict()

    def _get_reverse_edges(self) -> 'Mapping[str,  ReverseEdgeView[T]]':
        reverse_edges = {
            '~created_files': (self.creator, 'creator'),
            '~wrote_files': (self.writers, 'writers'),
            '~readers': (self.readers, 'readers'),
            '~deleter': (self.deleter, 'deleter'),
        }

        filtered = {re[0]: re[1] for re in reverse_edges.items() if re[1][0] is not None}

        return cast('Mapping[str,  ReverseEdgeView[T]]', filtered)


FileQuery = _FileQuery[Any]
FileView = _FileView[Any]

from grapl_analyzerlib.nodes.process_node import _ProcessView, _ProcessQuery, ProcessQuery

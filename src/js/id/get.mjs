import { js_node_identifer_by_name_get } from '../node/identifer/by/name/get.mjs';
import { metadata } from '../../metadata.mjs';
export function js_id_get(fd) {
    const node_identifier_name = 'id';
    let id = js_node_identifer_by_name_get(fd, node_identifier_name);
    return id;
    metadata([]);
}
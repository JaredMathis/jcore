import { metadata } from '../../../../metadata.mjs';
import { js_visit_nodes_types_get } from './get.mjs';
import { log } from '../../../../log.mjs';
export function js_visit_nodes_types_log(parsed) {
    let v = js_visit_nodes_types_get(parsed);
    log(v);
    metadata([]);
}
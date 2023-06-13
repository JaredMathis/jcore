import { js_visit_nodes_types_get } from './get.mjs';
import { log } from '../../../../log.mjs';
export function js_visit_nodes_types_log(parsed) {
    log(js_visit_nodes_types_get(parsed));
}
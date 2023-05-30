import { js_node_is_export_named_declaration } from './node/is/export/named/declaration.mjs';
import { list_filter } from '../list/filter.mjs';
import { js_body_get } from './body/get.mjs';
export function js_exports(parsed) {
    let body = js_body_get(parsed);
    let exports = list_filter(body, b => js_node_is_export_named_declaration(b));
    return exports;
}
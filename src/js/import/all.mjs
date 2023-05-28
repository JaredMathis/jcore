import { js_node_is_import_declaration } from '../node/is/import/declaration.mjs';
import { array_filter } from '../../array/filter.mjs';
import { js_body_get } from '../body/get.mjs';
export function js_import_all(parsed) {
    let body = js_body_get(parsed);
    let import_all = array_filter(body, b => js_node_is_import_declaration(b));
    return import_all;
}
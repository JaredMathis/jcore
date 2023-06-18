import { js_node_is_program } from './node/is/program.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { js_node_is_export_named_declaration } from './node/is/export/named/declaration.mjs';
import { list_filter } from '../list/filter.mjs';
import { js_body_get } from './body/get.mjs';
export function js_exports(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let body = js_body_get(parsed);
    let exports = list_filter(body, function v(b) {
        let v_2 = js_node_is_export_named_declaration(b);
        return v_2;
    });
    return exports;
    metadata([]);
}
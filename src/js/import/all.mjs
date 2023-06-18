import { js_node_is_program } from '../node/is/program.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_is_import_declaration } from '../node/is/import/declaration.mjs';
import { list_filter } from '../../list/filter.mjs';
import { js_body_get } from '../body/get.mjs';
export function js_import_all(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let body = js_body_get(parsed);
    let import_all = list_filter(body, function v(b) {
        return js_node_is_import_declaration(b);
    });
    return import_all;
    metadata([]);
}
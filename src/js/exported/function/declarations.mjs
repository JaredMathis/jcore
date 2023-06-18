import { js_node_is_program } from '../../node/is/program.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_export_declaration_get } from '../../export/declaration/get.mjs';
import { js_node_is_function_declaration } from '../../node/is/function/declaration.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { list_map } from '../../../list/map.mjs';
import { js_exports } from '../../exports.mjs';
export function js_exported_function_declarations(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let exports = js_exports(parsed);
    let declarations = list_map(exports, js_export_declaration_get);
    let filtered = list_filter(declarations, function v(d) {
        let v_2 = js_node_is_function_declaration(d);
        return v_2;
    });
    return filtered;
    metadata([]);
}
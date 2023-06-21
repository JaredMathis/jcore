import { function_add_js_node_type } from '../type.mjs';
import { js_identifiers_implies_function_add_js_node_type } from '../../../../../js/identifiers/implies/function/add/js/node/type.mjs';
import { js_identifiers } from '../../../../../js/identifiers.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = await function_parse(function_name);
    let identifiers = js_identifiers(parsed);
    let needed = js_identifiers_implies_function_add_js_node_type(identifiers);
    for (let n of needed) {
        function_add_js_node_type;
    }
}
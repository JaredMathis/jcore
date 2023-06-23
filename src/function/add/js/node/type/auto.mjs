import { js_identifiers_filter_to_node_properties } from '../../../../../js/identifiers/filter/to/node/properties.mjs';
import { function_identifiers } from '../../../../identifiers.mjs';
import { js_identifiers_filter_to_node_types } from '../../../../../js/identifiers/filter/to/node/types.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_add_js_node_type_snake } from './snake.mjs';
import { function_exists } from '../../../../exists.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifiers = await function_identifiers(function_name);
    let needed2 = js_identifiers_filter_to_node_properties(identifiers);
    let needed = js_identifiers_filter_to_node_types(identifiers);
    let lambda_function_new = function_add_js_node_type_snake
    for (let n of needed) {
        if (!await function_exists(n)) {
            await lambda_function_new(n);
        }
    }
}
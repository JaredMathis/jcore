import { js_identifiers_filter_to_node_types } from '../../../../../js/identifiers/filter/to/node/types.mjs';
import { js_identifiers } from '../../../../../js/identifiers.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
import { function_add_js_node_type_snake } from './snake.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = await function_parse(function_name);
    let identifiers = js_identifiers(parsed);
    let needed = js_identifiers_filter_to_node_types(identifiers);
    console.log({needed})
    for (let n of needed) {
        await function_add_js_node_type_snake(n);
    }
}
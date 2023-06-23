import { functions_new_if_not_exists } from '../../../../../functions/new/if/not/exists.mjs';
import { js_identifiers_filter_to_node_properties_get } from '../../../../../js/identifiers/filter/to/node/properties/get.mjs';
import { function_identifiers } from '../../../../identifiers.mjs';
import { js_identifiers_filter_to_node_types } from '../../../../../js/identifiers/filter/to/node/types.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_add_js_node_type_snake } from './snake.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifiers = await function_identifiers(function_name);
    let needed2 = js_identifiers_filter_to_node_properties_get(identifiers);
    await functions_new_if_not_exists(js_identifiers_filter_to_node_types, function_add_js_node_type_snake, identifiers);
}
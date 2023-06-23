import { js_identifier_combine } from '../../../../../js/identifier/combine.mjs';
import { js_identifier_prefix_property } from '../../../../../js/identifier/prefix/property.mjs';
import { js_prefix_node_property } from '../../../../../js/prefix/node/property.mjs';
import { function_add_property_get } from '../../../property/get.mjs';
import { functions_new_if_not_exists } from '../../../../../functions/new/if/not/exists.mjs';
import { js_identifiers_filter_to_node_properties_get } from '../../../../../js/identifiers/filter/to/node/properties/get.mjs';
import { function_identifiers } from '../../../../identifiers.mjs';
import { js_identifiers_filter_to_node_types } from '../../../../../js/identifiers/filter/to/node/types.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_add_js_node_type_snake } from './snake.mjs';
import { function_exists } from '../../../../exists.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifiers = await function_identifiers(function_name);
    let property_names = js_identifiers_filter_to_node_properties_get(identifiers);
    let prefix = js_prefix_node_property();
    for (let property_name of property_names) {
        let property_name_fn_get_prefix = js_identifier_prefix_property(prefix);
        let property_name_fn_get = js_identifier_combine(property_name_fn_get_prefix, property_name);
        let function_name = js_identifier_combine(property_name_fn_get, method);
        if (!await function_exists(function_name)) {
            await function_add_property_get(prefix, property_name);
        }
    }
    await functions_new_if_not_exists(js_identifiers_filter_to_node_types, function_add_js_node_type_snake, identifiers);
}
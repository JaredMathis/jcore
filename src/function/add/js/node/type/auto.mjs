import { metadata } from '../../../../../metadata.mjs';
import { js_suffix_get } from '../../../../../js/suffix/get.mjs';
import { js_identifier_combine } from '../../../../../js/identifier/combine.mjs';
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
import { js_prefix_node } from '../../../../../js/prefix/node.mjs';
import { js_identifier_parts_to } from '../../../../../js/identifier/parts/to.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifiers = await function_identifiers(function_name);
    let property_names = js_identifiers_filter_to_node_properties_get(identifiers);
    for (let property_name of property_names) {
        let parts = js_identifier_parts_to(property_name);
        let method = js_suffix_get();
        let prefix = js_prefix_node_property();
        let property_name_fn_get = js_identifier_combine(prefix, property_name);
        let function_name_new = js_identifier_combine(property_name_fn_get, method);
        let v = !await function_exists(function_name_new);
        if (v) {
            let v_2 = js_prefix_node();
            await function_add_property_get(v_2, property_name);
        }
    }
    await functions_new_if_not_exists(js_identifiers_filter_to_node_types, function_add_js_node_type_snake, identifiers);
    metadata([]);
}
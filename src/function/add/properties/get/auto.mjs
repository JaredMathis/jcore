import { object_keys_each_async } from '../../../../object/keys/each/async.mjs';
import { js_suffix_get } from '../../../../js/suffix/get.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_identifier_combine } from '../../../../js/identifier/combine.mjs';
import { function_add_property_get } from '../../property/get.mjs';
import { functions_new_if_not_exists } from '../../../../functions/new/if/not/exists.mjs';
import { js_identifiers_filter_to_node_properties_get } from '../../../../js/identifiers/filter/to/node/properties/get.mjs';
import { function_identifiers } from '../../../identifiers.mjs';
import { js_identifiers_filter_to_node_types } from '../../../../js/identifiers/filter/to/node/types.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_add_js_node_type_snake } from '../../js/node/type/snake.mjs';
import { function_exists } from '../../../exists.mjs';
import { js_identifier_parts_to } from '../../../../js/identifier/parts/to.mjs';
import { list_remove_last_verify } from '../../../../list/remove/last/verify.mjs';
import { string_value_property } from '../../../../string/value/property.mjs';
import { js_identifier_parts_from } from '../../../../js/identifier/parts/from.mjs';
export async function function_add_properties_get_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifiers = await function_identifiers(function_name);
    let property_names_dictionary = js_identifiers_filter_to_node_properties_get(identifiers);
    await object_keys_each_async(property_names_dictionary, async function v_3(property_names, prefix) {
        for (let property_name of property_names) {
            let method = js_suffix_get();
            let property_name_fn_get = js_identifier_combine(prefix, property_name);
            let function_name_new = js_identifier_combine(property_name_fn_get, method);
            let v = !await function_exists(function_name_new);
            if (v) {
                let prefix_parts = js_identifier_parts_to(prefix);
                list_remove_last_verify(prefix_parts, string_value_property());
                let without = js_identifier_parts_from(prefix_parts);
                await function_add_property_get(without, property_name);
            }
        }
    });
    await functions_new_if_not_exists(js_identifiers_filter_to_node_types, function_add_js_node_type_snake, identifiers);
    metadata([]);
}
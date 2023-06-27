import { js_node_property_properties_get } from '../../../../js/node/property/properties/get.mjs';
import { js_node_is_object_expression } from '../../../../js/node/is/object/expression.mjs';
import { js_node_property_value_get } from '../../../../js/node/property/value/get.mjs';
import { metadata } from '../../../../metadata.mjs';
import { refactor_node_assign_and_replace } from '../../../node/assign/and/replace.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_map } from '../../../../list/map.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { js_node_is_identifier } from '../../../../js/node/is/identifier.mjs';
export function refactor_object_expression_value_assign(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_children_get = n => {
        let properties = js_node_property_properties_get(n);
        let mapped = list_map(properties, js_node_property_value_get);
        return list_filter(mapped, n => !js_node_is_identifier(n));
    };
    let lambda_node_is_type = js_node_is_object_expression;
    refactor_node_assign_and_replace(args, lambda_node_is_type, lambda_children_get);
    metadata([]);
}
import { equal_not } from '../../../../../equal/not.mjs';
import { not } from '../../../../../not.mjs';
import { occurs } from '../../../../../occurs.mjs';
import { defined_is } from '../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_auto_no_add_refactors_invoke } from '../../../../../function/auto/no/add/refactors/invoke.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { js_node_property_arguments } from '../../../../../js/node/property/arguments.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_property_name } from '../../../../../js/node/property/name.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { js_node_is_member_expression } from '../../../../../js/node/is/member/expression.mjs';
import { list_add } from '../../../../../list/add.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
export async function refactor_member_expression_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let occurs = false;
    let {parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_member_expression, function v_4(v) {
        let node = object_property_get(v, 'node');
        let property = object_property_get(node, 'property');
        let v_5 = not(js_node_is_identifier(property));
        if (v_5) {
            return;
        }
        let v_2 = js_node_property_name();
        let property_name = object_property_get(property, v_2);
        let v_6 = equal_not(property_name, 'name');
        if (v_6) {
            return;
        }
        let object = object_property_get(node, 'object');
        const name = function_name_get(function_name_get);
        let expression = js_parse_call_expression(name);
        object_replace(node, expression);
        let v_3 = js_node_property_arguments();
        let node_args = object_property_get(node, v_3);
        list_add(node_args, object);
        occurs = true;
    });
    if (occurs) {
        await function_auto_no_add_refactors_invoke(args);
    }
    metadata([]);
}
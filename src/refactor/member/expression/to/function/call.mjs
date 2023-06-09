import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
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
    let occurs = boolean_value_false();
    let {parsed} = args;
    let v_7 = function v_4(v) {
        let v_8 = 'node';
        let node = object_property_get(v, v_8);
        let v_9 = 'property';
        let property = object_property_get(node, v_9);
        let v_10 = js_node_is_identifier(property);
        let v_5 = not(v_10);
        if (v_5) {
            return;
        }
        let v_2 = js_node_property_name();
        let property_name = object_property_get(property, v_2);
        let v_11 = 'name';
        let v_6 = equal_not(property_name, v_11);
        if (v_6) {
            return;
        }
        let v_12 = 'object';
        let object = object_property_get(node, v_12);
        const name = function_name_get(function_name_get);
        let expression = js_parse_call_expression(name);
        object_replace(node, expression);
        let v_3 = js_node_property_arguments();
        let node_args = object_property_get(node, v_3);
        list_add(node_args, object);
        occurs = boolean_value_true();
    };
    js_visit_nodes_filter(parsed, js_node_is_member_expression, v_7);
    if (occurs) {
        await function_auto_no_add_refactors_invoke(args);
    }
    metadata([]);
}
import { metadata } from '../../../../../../metadata.mjs';
import { metadata_function_call_arguments_are_identifiers_none } from '../../../../../../metadata/function/call/arguments/are/identifiers/none.mjs';
import { js_mapper_args_to_metadata_args_contains } from '../../../../../../js/mapper/args/to/metadata/args/contains.mjs';
import { or } from '../../../../../../or.mjs';
import { json_to } from '../../../../../../json/to.mjs';
import { refactor_call_arguments_to_assignments_skip } from '../../../../../../refactor/call/arguments/to/assignments/skip.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { js_node_is_identifier } from '../../../../../../js/node/is/identifier.mjs';
import { list_all } from '../../../../../../list/all.mjs';
import { assert_message } from '../../../../../../assert/message.mjs';
import { js_node_property_arguments_get } from '../../../../../../js/node/property/arguments/get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../../../../../../js/node/is/call/expression.mjs';
import { js_nodes_each } from '../../../../../../js/nodes/each.mjs';
import { js_node_is_spread_element } from '../../../../../../js/node/is/spread/element.mjs';
export async function rule_function_call_arguments_are_identifiers_each(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    let {file_path} = args;
    let v_5 = await js_mapper_args_to_metadata_args_contains(args, metadata_function_call_arguments_are_identifiers_none);
    if (v_5) {
        return;
    }
    let v_3 = function v(node) {
        const skip = refactor_call_arguments_to_assignments_skip(node);
        if (skip) {
            return;
        }
        let args = js_node_property_arguments_get(node);
        let v_7 = function v_2(n) {
            let v_9 = js_node_is_identifier(n);
            let v_10 = js_node_is_spread_element(n);
            let v_11 = or(v_9, v_10);
            return v_11;
        };
        let v_4 = list_all(args, v_7);
        let v_8 = {
            file_path,
            args
        };
        let v_6 = json_to(v_8);
        assert_message(v_4, v_6);
    };
    js_nodes_each(parsed, js_node_is_call_expression, v_3);
    metadata([]);
}
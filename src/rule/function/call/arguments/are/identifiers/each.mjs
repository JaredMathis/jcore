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
    js_nodes_each(parsed, js_node_is_call_expression, function v(node) {
        const skip = refactor_call_arguments_to_assignments_skip(node);
        if (skip) {
            return;
        }
        let args = js_node_property_arguments_get(node);
        assert_message(list_all(args, n => or(js_node_is_identifier(n), js_node_is_spread_element(n))), json_to({
            file_path,
            args
        }));
    });
    metadata([]);
}
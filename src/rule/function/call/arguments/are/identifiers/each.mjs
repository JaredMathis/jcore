import { refactor_call_arguments_to_assignments_skip } from '../../../../../../refactor/call/arguments/to/assignments/skip.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { js_node_is_identifier } from '../../../../../../js/node/is/identifier.mjs';
import { list_all } from '../../../../../../list/all.mjs';
import { assert_message } from '../../../../../../assert/message.mjs';
import { js_node_property_arguments_get } from '../../../../../../js/node/property/arguments/get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../../../../../../js/node/is/call/expression.mjs';
import { js_nodes_each } from '../../../../../../js/nodes/each.mjs';
export function rule_function_call_arguments_are_identifiers_each(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    let {file_path} = args;
    js_nodes_each(parsed, js_node_is_call_expression, node => {
        const skip = refactor_call_arguments_to_assignments_skip(node);
        if (skip) {
            return;
        }
        let args = js_node_property_arguments_get(node);
        console.log({args})
        assert_message(list_all(args, js_node_is_identifier), file_path);
    });
}
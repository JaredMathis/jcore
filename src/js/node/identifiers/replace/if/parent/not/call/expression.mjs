import { list_is } from '../../../../../../../../list/is.mjs';
import { js_visit_nodes_filter } from '../../../../../../../visit/nodes/filter.mjs';
import { js_node_is_identifier } from '../../../../../../is/identifier.mjs';
import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
export function js_node_identifiers_replace_if_parent_not_call_expression(node, replacements) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        list_is
    ]);
    js_visit_nodes_filter(node, js_node_is_identifier, v => {
        let {node} = v;
    });
}
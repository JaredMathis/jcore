import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { js_visit_nodes_filter } from './nodes/filter.mjs';
export function js_visit_identifiers(node, v_2) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    js_visit_nodes_filter(node, js_node_is_identifier, v_2);
    metadata([]);
}
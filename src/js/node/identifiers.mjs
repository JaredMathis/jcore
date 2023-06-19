import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_name_get } from '../identifier/name/get.mjs';
import { js_node_is_identifier } from './is/identifier.mjs';
import { js_nodes_each } from '../nodes/each.mjs';
import { list_adder } from '../../list/adder.mjs';
export function js_node_identifiers(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return list_adder(la => {
        js_nodes_each(node, js_node_is_identifier, n => {
            let name = js_identifier_name_get(n);
            la(name);
        });
    });
}
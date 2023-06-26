import { metadata } from '../../metadata.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_name_get } from '../identifier/name/get.mjs';
import { js_node_is_identifier } from './is/identifier.mjs';
import { js_nodes_each } from '../nodes/each.mjs';
import { list_adder } from '../../list/adder.mjs';
export function js_node_identifiers(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_4 = function v_2(la) {
        let v_5 = function v_3(n) {
            let name = js_identifier_name_get(n);
            la(name);
        };
        js_nodes_each(node, js_node_is_identifier, v_5);
    };
    let v = list_adder(v_4);
    return v;
    metadata([]);
}
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_nodes_each } from './each.mjs';
import { list_adder } from '../../list/adder.mjs';
export function js_nodes_get(parsed, predicate) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_3 = function v_2(list_new_then_add) {
        js_nodes_each(parsed, predicate, list_new_then_add);
    };
    let v = list_adder(v_3);
    return v;
    metadata([]);
}
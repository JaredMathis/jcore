import { js_visit_nodes_filter } from '../../visit/nodes/filter.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_nodes_each_async(parsed, predicate, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    js_visit_nodes_filter(parsed, predicate, function v_3(v) {
        let {node} = v;
        let v_2 = lambda(node);
        return v_2;
    });
}
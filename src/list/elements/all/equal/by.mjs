import { list_elements_all_equal_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { equal_by } from '../../../../equal/by.mjs';
export function list_elements_all_equal_by(map, values) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let lambda = function v_2(a, b) {
        let v_3 = equal_by(map, a, b);
        return v_3;
    };
    let v = list_elements_all_equal_generic(lambda, values);
    return v;
}
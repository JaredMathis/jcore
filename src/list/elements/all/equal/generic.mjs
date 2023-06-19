import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_all } from '../../../all.mjs';
import { list_first } from '../../../first.mjs';
export function list_elements_all_equal_generic(lambda, values) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let first = list_first(values);
    let list_all_equal = list_all(values, function list_all_each(v) {
        let e = lambda(v, first);
        return e;
    });
    return list_all_equal;
}
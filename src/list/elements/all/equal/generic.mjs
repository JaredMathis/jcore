import { function_is } from '../../../../function/is.mjs';
import { metadata } from '../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_all } from '../../../all.mjs';
import { list_first } from '../../../first.mjs';
export function list_elements_all_equal_generic(lambda, values) {
    arguments_assert(arguments, [
        function_is,
        arguments_assert_todo
    ]);
    let first = list_first(values);
    let v_2 = function list_all_each(v) {
        let e = lambda(v, first);
        return e;
    };
    let list_all_equal = list_all(values, v_2);
    return list_all_equal;
    metadata([]);
}
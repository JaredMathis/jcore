import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { integer_value_2 } from '../../value/2.mjs';
import { equal } from '../../../equal.mjs';
import { integer_mod } from '../../mod.mjs';
export function integer_even_is_generic(a, expected) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = integer_value_2();
    let result_mod = integer_mod(a, v_2);
    let v = equal(result_mod, expected);
    return v;
    metadata([]);
}
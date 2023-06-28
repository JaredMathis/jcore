import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_join } from '../../../list/join.mjs';
export function js_code_join_comma(params_mapped) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = ', ';
    let v = list_join(params_mapped, v_2);
    return v;
    metadata([]);
}
import { list_remove_at } from '../../../list/remove/at.mjs';
import { refactor_input_generic_simple } from '../generic/simple.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_input_remove_at(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_index} = args;
    let lambda = function v(list) {
        let v_2 = list_remove_at(list, input_index);
        return v_2;
    };
    await refactor_input_generic_simple(args, lambda);
}
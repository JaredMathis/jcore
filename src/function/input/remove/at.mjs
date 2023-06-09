import { metadata } from '../../../metadata.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { function_name_get } from '../../name/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { refactor_input_remove_at } from '../../../refactor/input/remove/at.mjs';
export async function function_input_remove_at(function_name, index_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let input_index = integer_parse(index_string);
    let v = function_name_get(refactor_input_remove_at);
    let v_2 = { input_index };
    await function_map_with_args(v, function_name, v_2);
    metadata([]);
}
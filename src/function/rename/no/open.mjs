import { list_to_string_log } from '../../../list/to/string/log.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_rename_if_starts_with } from '../if/starts/with.mjs';
import { function_rename_single } from '../single.mjs';
import { function_name_get } from '../../name/get.mjs';
import { assert_message } from '../../../assert/message.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
import { function_name_all_tests_not_starts_with } from '../../name/all/tests/not/starts/with.mjs';
import { string_combine } from '../../../string/combine.mjs';
export async function function_rename_no_open(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let starting_withs = await function_name_all_tests_not_starts_with(function_name_old);
    let v = list_length_is_1(starting_withs);
    let v_3 = `Multiple functions exist. Use ${ function_name_get(function_rename_single) } if you're sure or consider ${ function_name_get(function_rename_if_starts_with) }: `;
    let v_4 = list_to_string_log(starting_withs);
    let v_2 = string_combine(v_3, v_4);
    assert_message(v, v_2);
    let result = await function_rename_single(function_name_old, function_name_new);
    return result;
    metadata([]);
}
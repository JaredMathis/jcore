import { log } from '../log.mjs';
import { function_rename_if_starts_with } from './rename/if/starts/with.mjs';
import { function_name_all_tests_not_starts_with } from './name/all/tests/not/starts/with.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { function_rename_single } from './rename/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_length_is_1 } from '../list/length/is/1.mjs';
import { assert_message } from '../assert/message.mjs';
import { function_name_get } from './name/get.mjs';
export async function function_rename(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    log('a');
    let starting_withs = await function_name_all_tests_not_starts_with(function_name_old);
    log('a');
    let v = list_length_is_1(starting_withs);
    log('a');
    assert_message(v, `Multiple functions exist. Use ${ function_name_get(function_rename_single) } if you're sure or consider ${ function_name_get(function_rename_if_starts_with) }: ` + starting_withs);
    log('a');
    let result = await function_rename_single(function_name_old, function_name_new);
    return result;
}
import { function_rename_if_starts_with } from './rename/if/starts/with.mjs';
import { function_name_starts_with } from './name/starts/with.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { function_rename_single } from './rename/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
import { list_length_is_1 } from '../list/length/is/1.mjs';
export async function function_rename(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let starting_withs = await function_name_starts_with(function_name_old);
    assert(list_length_is_1(starting_withs), `Multiple functions exist. Use ${ function_rename_single } if you're sure or consider ${ function_rename_if_starts_with }`);
    let result = await function_rename_single(function_name_old, function_name_new);
    return result;
}
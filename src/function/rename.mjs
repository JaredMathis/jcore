import { string_identifier_is } from '../string/identifier/is.mjs';
import { function_rename_single } from './rename/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_rename(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let result = await function_rename_single(function_name_old, function_name_new);
    return result;
}
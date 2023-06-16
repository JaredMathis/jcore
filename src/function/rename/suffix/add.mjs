import { string_identifier_sub_is } from '../../../string/identifier/sub/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { function_rename_suffix_change } from './change.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_suffix_add(function_name_old, suffix_old, suffix_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_sub_is,
        string_identifier_sub_is
    ]);
    let result = await function_rename_suffix_change(function_name_old, suffix_old, suffix_new);
    return result;
}
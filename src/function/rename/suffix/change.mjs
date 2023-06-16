import { string_identifier_sub_is } from '../../../string/identifier/sub/is.mjs';
import { function_rename_single } from '../single.mjs';
import { string_suffix_replace } from '../../../string/suffix/replace.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function function_rename_suffix_change(function_name_old, suffix_old, suffix_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_sub_is,
        string_identifier_sub_is
    ]);
    let function_name_new = string_suffix_replace(function_name_old, suffix_old, suffix_new);
    await function_rename_single(function_name_old, function_name_new);
}
import { function_rename_suffix_generic } from './generic.mjs';
import { string_identifier_sub_is } from '../../../string/identifier/sub/is.mjs';
import { string_suffix_replace } from '../../../string/suffix/replace.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function function_rename_suffix_change(function_name_old_without_suffix, suffix_old, suffix_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_sub_is,
        string_identifier_sub_is
    ]);
    const function_name_old_parts = [
        function_name_old_without_suffix,
        suffix_old
    ];
    let function_name_old_to_new = function_name_old => string_suffix_replace(function_name_old, suffix_old, suffix_new);
    await function_rename_suffix_generic(function_name_old_parts, function_name_old_to_new);
}
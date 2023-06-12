import { string_suffix_replace } from '../../string/suffix/replace.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export function function_rename_suffix(function_name_old, suffix_old, suffix_new) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_name_new = string_suffix_replace(function_name_old, suffix_old, suffix_new);
    error('todo: function_rename_prefix');
}
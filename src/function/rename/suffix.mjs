import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { string_suffix_without } from '../../string/suffix/without.mjs';
export function function_rename_suffix(function_name_old, suffix_old, suffix_new) {
    arguments_assert(arguments, [string_identifier_is]);
    let suffix_without = string_suffix_without(function_name_old, suffix_old);
    let function_;
    error('todo: function_rename_prefix');
}
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function function_rename(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
}
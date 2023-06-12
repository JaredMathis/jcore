import { string_identifier_is } from '../../string/identifier/is.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function function_copy_replace(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    error('todo: function_copy_replace');
}
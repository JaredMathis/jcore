import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export function function_input_add(function_name, input_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    error('todo: function_input_add');
}
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export function function_metadata_add(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
}
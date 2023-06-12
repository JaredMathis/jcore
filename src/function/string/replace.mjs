import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export function function_string_replace(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_map_with_args(function_name_get(refactor_string_replace), function_name, {
        identifier,
        prefix,
        properties
    });
}
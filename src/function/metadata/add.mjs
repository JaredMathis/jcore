import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export function function_metadata_add(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_map(function_name_get(refactor_metadata_add), function_name);
}
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { function_wrap_with } from '../../with.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_wrap_with_name_auto(function_name_to_wrap, function_name_map) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let result = await function_wrap_with(function_name_to_wrap, function_name_to_add, function_name_map);
    return result;
}
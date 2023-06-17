import { function_delete } from '../delete.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_wrap } from '../wrap.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_wrap_replace(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_delete(function_name_to_add);
    let result = await function_wrap(function_name_to_wrap, function_name_to_add);
    return result;
}
import { string_identifier_parts_from } from '../../string/identifier/parts/from.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_wrap } from '../wrap.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_wrap_suffix(function_name_to_wrap, suffix) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let function_name_to_add = string_identifier_parts_from([
        function_name_to_wrap,
        suffix
    ]);
    let result = await function_wrap(function_name_to_wrap, function_name_to_add);
    return result;
}
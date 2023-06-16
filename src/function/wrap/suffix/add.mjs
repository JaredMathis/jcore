import { function_wrap } from '../../wrap.mjs';
import { string_identifier_first_not_is } from '../../../string/identifier/first/not/is.mjs';
import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_wrap_suffix_add(function_name_to_wrap_without_suffix, suffix_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_first_not_is
    ]);
    let function_name_to_add = string_identifier_parts_from([
        function_name_to_wrap_without_suffix,
        suffix_to_add
    ]);
    let result = await function_wrap(function_name_to_wrap_without_suffix, function_name_to_add);
    return result;
}
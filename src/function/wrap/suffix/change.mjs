import { string_identifier_first_not_is } from '../../../string/identifier/first/not/is.mjs';
import { string_suffix_replace } from '../../../string/suffix/replace.mjs';
import { function_wrap } from '../../wrap.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_wrap_suffix_change(function_name_to_wrap, suffix_before, suffix_after) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_first_not_is,
        string_identifier_first_not_is
    ]);
    let function_name_to_add = string_suffix_replace(function_name_to_wrap, suffix_before, suffix_after);
    let result = await function_wrap(function_name_to_wrap, function_name_to_add);
    return result;
}
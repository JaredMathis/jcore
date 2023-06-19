import { string_identifier_suffix_remove } from '../../../string/identifier/suffix/remove.mjs';
import { function_wrap } from '../../wrap.mjs';
import { string_identifier_first_not_is } from '../../../string/identifier/first/not/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_wrap_suffix_remove(function_name_to_wrap_without_suffix, suffix_to_remove) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_first_not_is
    ]);
    let function_name_to_wrap = string_identifier_suffix_remove(suffix_to_remove, function_name_to_wrap_without_suffix);
    let result = await function_wrap(function_name_to_wrap, function_name_to_wrap_without_suffix);
    return result;
}
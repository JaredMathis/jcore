import { function_wrap } from '../../wrap.mjs';
import { string_identifier_first_not_is } from '../../../string/identifier/first/not/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_add } from '../../../string/add.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export async function function_wrap_suffix_remove(function_name_to_wrap_without_suffix, suffix_to_remove) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_first_not_is
    ]);
    let v = function_name_separator();
    const suffix_with_separator = string_add(v, suffix_to_remove);
    let function_name_to_wrap = string_add(function_name_to_wrap_without_suffix, suffix_with_separator);
    let result = await function_wrap(function_name_to_wrap, function_name_to_wrap_without_suffix);
    return result;
}
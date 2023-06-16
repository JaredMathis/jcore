import { function_wrap_suffix_change } from './change.mjs';
import { string_identifier_first_not_is } from '../../../string/identifier/first/not/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_suffix_without } from '../../../string/suffix/without.mjs';
import { string_add } from '../../../string/add.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export async function function_wrap_suffix_remove(function_name_to_wrap, suffix_to_remove) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_first_not_is
    ]);
    let function_name_to_add = string_suffix_without(function_name_to_wrap, string_add(function_name_separator(), suffix_to_remove));
    let result = await function_wrap_suffix_change(function_name_to_wrap, function_name_to_add);
    return result;
}
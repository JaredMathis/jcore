import { function_wrap } from '../../wrap.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_suffix_without } from '../../../string/suffix/without.mjs';
export async function function_wrap_suffix_change(function_name_to_wrap, suffix_before) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    string_suffix_without();
    let result = await function_wrap(function_name_to_wrap, function_name_to_add);
    return result;
}
import { js_identifier_first_not_is } from '../../../js/identifier/first/not/is.mjs';
import { string_suffix_replace } from '../../../string/suffix/replace.mjs';
import { function_wrap } from '../../wrap.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_join } from '../../../list/join.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export async function function_wrap_suffix_change(function_name_to_wrap_without_suffix, suffix_before, suffix_after) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_first_not_is,
        js_identifier_first_not_is
    ]);
    let v = function_name_separator();
    let function_name_to_wrap = list_join([
        function_name_to_wrap_without_suffix,
        suffix_before
    ], v);
    let function_name_to_add = string_suffix_replace(function_name_to_wrap, suffix_before, suffix_after);
    let result = await function_wrap(function_name_to_wrap, function_name_to_add);
    return result;
}
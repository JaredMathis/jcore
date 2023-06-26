import { function_wrap } from '../../wrap.mjs';
import { js_identifier_first_not_is } from '../../../js/identifier/first/not/is.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_parts_from } from '../../../js/identifier/parts/from.mjs';
export async function function_wrap_suffix_remove(function_name_to_wrap_without_suffix, suffix_to_remove) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_first_not_is
    ]);
    let v = [
        function_name_to_wrap_without_suffix,
        suffix_to_remove
    ];
    let function_name_to_wrap = js_identifier_parts_from(v);
    let result = await function_wrap(function_name_to_wrap, function_name_to_wrap_without_suffix);
    return result;
}
import { function_wrap } from '../../wrap.mjs';
import { js_identifier_first_not_is } from '../../../js/identifier/first/not/is.mjs';
import { js_identifier_parts_from } from '../../../js/identifier/parts/from.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_wrap_suffix_add(function_name_to_wrap_without_suffix, suffix_to_add) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_first_not_is
    ]);
    let function_name_to_add = js_identifier_parts_from([
        function_name_to_wrap_without_suffix,
        suffix_to_add
    ]);
    let result = await function_wrap(function_name_to_wrap_without_suffix, function_name_to_add);
    return result;
}
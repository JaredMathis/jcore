import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { function_wrap_with } from '../../with.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_join } from '../../../../list/join.mjs';
import { function_name_separator } from '../../../name/separator.mjs';
export async function function_wrap_with_name_auto(function_name_to_wrap, function_name_map) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let v = function_name_separator();
    let v_2 = [
        function_name_to_wrap,
        function_name_map
    ];
    let function_name_to_add = list_join(v_2, v);
    let result = await function_wrap_with(function_name_to_wrap, function_name_to_add, function_name_map);
    return result;
}
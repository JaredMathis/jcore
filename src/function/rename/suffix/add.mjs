import { function_rename_single } from '../single.mjs';
import { js_identifier_sub_is } from '../../../js/identifier/sub/is.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
export async function function_rename_suffix_add(function_name_old, suffix) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_sub_is
    ]);
    let v = function_name_separator();
    let function_name_new = list_join([
        function_name_old,
        suffix
    ], v);
    let v_2 = await function_rename_single(function_name_old, function_name_new);
    return v_2;
}
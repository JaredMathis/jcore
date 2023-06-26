import { metadata } from '../../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { list_is } from '../../../../../../list/is.mjs';
import { function_callers_arguments_assert_auto } from '../../auto.mjs';
export async function function_callers_arguments_assert_auto_multiple_list(multiple, result) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    for (let m of multiple) {
        let r = await function_callers_arguments_assert_auto(m);
        list_add_multiple(result, r);
    }
    return result;
    metadata([]);
}
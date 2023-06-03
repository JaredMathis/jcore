import { function_callers_arguments_assert_auto } from '../auto.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_add_multiple } from '../../../../../list/add/multiple.mjs';
export async function function_callers_arguments_assert_auto_multiple() {
    arguments_assert(arguments, []);
    let result = [];
    let multiple = [
        "file_js_all_identifier_all_rename",
        "object_merge",
        "object_property_all_delete"
       ];
    for (let m of multiple) {
        let r = await function_callers_arguments_assert_auto(m);
        list_add_multiple(result, r);
    }
    return result;
}
import { metadata } from '../../../../../metadata.mjs';
import { function_callers_arguments_assert_auto_multiple_list } from './multiple/list.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_callers_arguments_assert_auto_multiple() {
    arguments_assert(arguments, []);
    let result = [];
    let multiple = [
        'file_js_all_identifier_rename',
        'file_js_identifier_rename'
    ];
    let v = await function_callers_arguments_assert_auto_multiple_list(multiple, result);
    return v;
    metadata([]);
}
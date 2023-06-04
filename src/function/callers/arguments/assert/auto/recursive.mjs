import { function_callers_arguments_assert_auto_multiple_list } from './multiple/list.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
export async function function_callers_arguments_assert_auto_recursive() {
    arguments_assert(arguments, []);
    let root = 'js_mapper_with_function_declaration_get';
    let result;
    let result_next;
    do {
        result = [];
        result_next = await function_callers_arguments_assert_auto_multiple_list([root], result);
    } while (!json_equal(result, result_next));
}
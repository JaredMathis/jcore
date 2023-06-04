import { function_callers_arguments_assert_auto_multiple_list } from './multiple/list.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
export async function function_callers_arguments_assert_auto_recursive() {
    arguments_assert(arguments, []);
    let root = 'js_mapper_with_function_declaration_get';
    let result = [root];
    let result_previous;
    do {
        result_previous = result;
        result = await function_callers_arguments_assert_auto_multiple_list(result, []);
        console.log({result_previous, result})
    } while (!json_equal(result, result_previous));
}
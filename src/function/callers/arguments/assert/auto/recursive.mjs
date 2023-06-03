import { function_callers_arguments_assert_auto_multiple } from './multiple.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { json_equals_keys_without } from '../../../../../json/equals/keys/without.mjs';
export async function function_callers_arguments_assert_auto_recursive() {
    arguments_assert(arguments, []);
    let root = 'js_mapper_with_function_declaration_get';
    let result = [];
    let result_next = await function_callers_arguments_assert_auto_multiple_list([root], result);
}
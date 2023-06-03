import { function_callers_arguments_assert_auto_multiple } from './multiple.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function function_callers_arguments_assert_auto_recursive() {
    arguments_assert(arguments, []);
    function_callers_arguments_assert_auto_multiple();
    'js_mapper_with_function_declaration_get';
}
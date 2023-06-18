import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_dependencies_names } from '../../names.mjs';
export function function_dependencies_names_arguments_assert() {
    let v = function_name_get(arguments_assert);
    let v_2 = function_dependencies_names(v);
    return v_2;
}
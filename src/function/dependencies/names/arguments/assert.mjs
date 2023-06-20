import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_dependencies_names } from '../../names.mjs';
export async function function_dependencies_names_arguments_assert() {
    arguments_assert(arguments, []);
    let v = function_name_get(arguments_assert);
    let v_2 = await function_dependencies_names(v);
    return v_2;
}
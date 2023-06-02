import { function_dependencies } from './dependencies.mjs';
import { function_name_all } from './name/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let all = await function_name_all();
    for (let function_name of all) {
        await function_dependencies(function_name);
    }
    return all;
}
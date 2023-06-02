import { function_name_all } from './name/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let all = await function_name_all();
    return all;
}
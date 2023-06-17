import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_auto } from '../auto.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_auto_run(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_auto(function_name);
    return result;
}
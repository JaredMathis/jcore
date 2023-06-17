import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_auto } from '../auto.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_run } from '../run.mjs';
export async function function_auto_run(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_auto(function_name);
    return await function_run(function_name, []);
}
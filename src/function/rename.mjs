import { function_rename_no_open } from './rename/no/open.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_rename(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let result = await function_rename_no_open(function_name_old, function_name_new);
    await function_open_vs_code(function_name_new);
    return result;
}
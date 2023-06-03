import { arguments_assert } from '../../arguments/assert.mjs';
import { js_export_function_single } from '../../js/export/function/single.mjs';
import { tautology } from '../../tautology.mjs';
import { function_parse } from '../parse.mjs';
export async function function_to_declaration(function_name) {
    arguments_assert(arguments, [tautology]);
    let parsed = await function_parse(function_name);
    let fd = js_export_function_single(parsed);
    return fd;
}
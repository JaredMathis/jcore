import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_export_function_single } from '../../js/export/function/single.mjs';
import { function_parse } from '../parse.mjs';
export async function function_to_declaration(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let parsed = await function_parse(function_name);
    let fd = js_export_function_single(parsed);
    return fd;
}
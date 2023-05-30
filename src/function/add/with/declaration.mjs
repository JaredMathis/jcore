import { js_exports } from '../../../js/exports.mjs';
import { js_function_name_to_export } from '../../../js/function/name/to/export.mjs';
import { function_write } from '../../write.mjs';
import { error } from '../../../error.mjs';
import { js_parse } from '../../../js/parse.mjs';
export async function function_add_with_declaration(function_name, fd) {
    let parsed = js_parse(js_function_name_to_export(function_name));
    let exports = js_exports(parsed);
    error('todo: function_add_with_declaration');
    return await function_write(function_name, parsed);
}
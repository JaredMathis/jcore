import { js_function_declaration_statements_initialize } from '../../../js/function/declaration/statements/initialize.mjs';
import { js_exported_function_declaration_single } from '../../../js/exported/function/declaration/single.mjs';
import { file_js_write } from '../../../file/js/write.mjs';
import { js_function_name_to_export } from '../../../js/function/name/to/export.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
import { js_parse } from '../../../js/parse.mjs';
export async function function_add_with_body(function_name, body) {
    let function_path = function_name_to_path(function_name);
    const code = js_function_name_to_export(function_name);
    let parsed = js_parse(code);
    let fd = js_exported_function_declaration_single(parsed);
    js_function_declaration_statements_initialize(fd, body);
    await file_js_write(parsed, function_path);
    return function_path;
}
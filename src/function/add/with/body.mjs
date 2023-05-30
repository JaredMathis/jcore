import { js_function_name_to_export } from '../../../js/function/name/to/export.mjs';
import { js_exported_function_declaration_single_statements_set } from '../../../js/exported/function/declaration/single/statements/set.mjs';
import { js_unparse } from '../../../js/unparse.mjs';
import { file_write } from '../../../file/write.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
import { js_parse } from '../../../js/parse.mjs';
export async function function_add_with_body(function_name, body) {
    let function_path = function_name_to_path(function_name);
    const code = js_function_name_to_export(function_name);
    let parsed = js_parse(code);
    js_exported_function_declaration_single_statements_set(parsed, body);
    await file_js_write(parsed, function_path);
    return function_path;
}



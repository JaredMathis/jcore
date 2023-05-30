import { js_exported_function_declaration_single_statements_initialize } from '../../../js/exported/function/declaration/single/statements/initialize.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { file_js_path_to_name } from '../../../file/js/path/to/name.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { list_remove_all } from '../../../list/remove/all.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { js_exports } from '../../../js/exports.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { list_add } from '../../../list/add.mjs';
import { comment } from '../../../comment.mjs';
import { js_function_name_to_export } from '../../../js/function/name/to/export.mjs';
export async function refactor_console_to_function(args) {
    let {parsed, file_path} = args;
    let exports_existing = js_exports(parsed);
    if (!list_length_is_0(exports_existing)) {
        return;
    }
    let body = js_body_get(parsed);
    let function_body_statements_new = js_without_imports(parsed);
    if (list_length_is_0(function_body_statements_new)) {
        comment(`no code to refactor`);
        return;
    }
    list_remove_all(body, function_body_statements_new);
    let function_name = file_js_path_to_name(file_path);
    js_add_function_with_statements(function_name, body, parsed, function_body_statements_new);
}

function js_add_function_with_statements(function_name, body, parsed, function_body_statements_new) {
    let export_statement = js_parse_statement(js_function_name_to_export(function_name));
    list_add(body, export_statement);
    js_exported_function_declaration_single_statements_initialize(parsed, function_body_statements_new);
}

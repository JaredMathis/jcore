import { list_add_all } from '../../../list/add/all.mjs';
import { js_node_is_block_statement } from '../../../js/node/is/block/statement.mjs';
import { js_exported_function_declaration_single } from '../../../js/exported/function/declaration/single.mjs';
import { log } from '../../../log.mjs';
import { file_js_path_to_name } from '../../../file/js/path/to/name.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { list_remove_all } from '../../../list/remove/all.mjs';
import { list_without_all } from '../../../list/without/all.mjs';
import { js_import_all } from '../../../js/import/all.mjs';
import { file_js_parse } from '../../../file/js/parse.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { js_exports } from '../../../js/exports.mjs';
import { assert } from '../../../assert.mjs';
import { error } from '../../../error.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { list_add } from '../../../list/add.mjs';
import { comment } from '../../../comment.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export async function refactor_console_to_function(file_path) {
    let parsed = await file_js_parse(file_path);
    let exports_existing = js_exports(parsed);
    assert(list_length_is_0(exports_existing));
    let imports = js_import_all(parsed);
    let body = js_body_get(parsed);
    let function_body_statements_new = list_without_all(body, imports);
    if (list_length_is_0(function_body_statements_new)) {
        comment(`no code to refactor`);
        return;
    }
    list_remove_all(body, function_body_statements_new);
    let function_name = file_js_path_to_name(file_path);
    let export_statement = js_parse_statement(`export function ${ function_name }() { }`);
    list_add(body, export_statement);
    let fd = js_exported_function_declaration_single(parsed);
    let function_body = object_property_get(fd, 'body');
    assert(js_node_is_block_statement(function_body));
    let function_body_statements_old = object_property_get(function_body, 'body');
    assert(list_length_is_0(function_body_statements_old));
    list_add_all(function_body_statements_old, function_body_statements_new);
    console.log({ function_body });
    error();
}
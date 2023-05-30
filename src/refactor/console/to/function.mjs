import { list_remove_all } from '../../../list/remove/all.mjs';
import { list_without_all } from '../../../list/without/all.mjs';
import { js_import_all } from '../../../js/import/all.mjs';
import { file_js_parse } from '../../../file/js/parse.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
export async function refactor_console_to_function(file_path) {
    let parsed = file_js_parse(file_path);
    let imports = js_import_all(parsed);
    let body = js_body_get(parsed);
    let function_body = list_without_all(body, imports);
    list_remove_all(body, function_body);
}
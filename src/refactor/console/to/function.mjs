import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { list_remove_all } from '../../../list/remove/all.mjs';
import { list_without_all } from '../../../list/without/all.mjs';
import { js_import_all } from '../../../js/import/all.mjs';
import { file_js_parse } from '../../../file/js/parse.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { js_exports } from '../../../js/exports.mjs';
import { assert } from '../../../assert.mjs';
export async function refactor_console_to_function(file_path) {
    let parsed = await file_js_parse(file_path);
    let exports_existing = js_exports(parsed);
    assert(list_length_is_0(exports_existing));
    let imports = js_import_all(parsed);
    let body = js_body_get(parsed);
    let function_body = list_without_all(body, imports);
    list_remove_all(body, function_body);
}
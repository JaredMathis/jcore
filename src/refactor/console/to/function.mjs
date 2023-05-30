import { js_import_all } from '../../../js/import/all.mjs';
import { file_js_parse } from '../../../file/js/parse.mjs';
export async function refactor_console_to_function(file_path) {
    let parsed = file_js_parse(file_path);
    js_import_all();
}
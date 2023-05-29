import { js_import_all_to_function_name } from './js_import_all_to_function_name.mjs';
export async function refactor_import_extra(parsed) {
    let import_name_all = js_import_all_to_function_name(parsed);
}
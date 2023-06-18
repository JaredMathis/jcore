import { function_rename_after } from '../../after.mjs';
import { file_js_all_identifier_rename } from '../../../../file/js/all/identifier/rename.mjs';
export async function function_rename_identifiers_and_after(function_name_old, function_name_new) {
    let file_paths_changed = await file_js_all_identifier_rename(function_name_old, function_name_new);
    await function_rename_after(file_paths_changed);
}
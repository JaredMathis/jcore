import { file_js_map } from "../map.mjs";

export async function file_js_identifier_rename(file_path, identifier_name_old, identifier_name_new) {
    await file_js_map(js_identifier_rename.name, file_path)
}
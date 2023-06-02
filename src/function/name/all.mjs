import { file_js_path_all_to_name } from '../../file/js/path/all/to/name.mjs';
import { file_js_all_path } from '../../file/js/all/path.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export async function function_name_all() {
    arguments_assert(arguments, []);
    let paths = await file_js_all_path();
    let names = file_js_path_all_to_name(paths);
    return names;
    metadata([]);
}
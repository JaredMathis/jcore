import { file_js_multiple_map } from '../multiple/map.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { file_js_all_path } from '../all/path.mjs';
export async function file_js_filered_map(function_name_mapper, filter) {
    let all = await file_js_all_path();
    let filtered = list_filter(all, filter);
    await file_js_multiple_map(function_name_mapper, filtered);
}
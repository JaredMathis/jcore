import { list_filter } from '../../../list/filter.mjs';
import { file_js_multiple_map } from '../multiple/map.mjs';
import { file_js_all_path } from './path.mjs';
export async function file_js_all_map(function_name_mapper) {
    let filter = tautology;
    let all = await file_js_all_path();
    let filtered = list_filter(all, filter);
    await file_js_multiple_map(function_name_mapper, all);
}
function tautology() {
    return true;
}
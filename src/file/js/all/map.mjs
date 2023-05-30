import { file_js_filered_map } from '../filered/map.mjs';
import { tautology } from '../../../tautology.mjs';
export async function file_js_all_map(function_name_mapper) {
    let filter = tautology;
    await file_js_filered_map(filter, function_name_mapper);
}
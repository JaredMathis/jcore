import { metadata } from '../../metadata.mjs';
import { file_js_map_args } from '../../file/js/map/args.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
export async function function_map_args(function_name, mapper) {
    let file_path = function_name_to_file_path(function_name);
    await file_js_map_args(file_path, mapper);
    metadata([]);
}
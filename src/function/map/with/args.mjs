import { file_js_map_with_args } from '../../../file/js/map/with/args.mjs';
import { function_name_to_file_path } from '../../name/to/file/path.mjs';
export async function function_map_with_args(function_name, function_name_mapper, args) {
    let file_path = function_name_to_file_path(function_name);
    await file_js_map_with_args(function_name_mapper, file_path, args);
}
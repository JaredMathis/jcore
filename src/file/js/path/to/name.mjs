import { error } from '../../../../error.mjs';
import { file_js_path_all_to_name } from '../all/to/name.mjs';
export function file_js_path_to_name(file_js_path) {
    return file_js_path_all_to_name([file_js_path]);
}
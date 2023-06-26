import { metadata } from '../../../metadata.mjs';
import { file_rename } from '../../../file/rename.mjs';
import { function_name_to_file_path } from '../../name/to/file/path.mjs';
export async function function_rename_file_path(function_name_old, function_name_new) {
    let file_path_old = function_name_to_file_path(function_name_old);
    let file_path_new = function_name_to_file_path(function_name_new);
    await file_rename(file_path_old, file_path_new);
    metadata([]);
}
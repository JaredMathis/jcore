import { path_join } from '../../../path/join.mjs';
import { version_path_files_get } from '../files/get.mjs';
export function version_path_file_directory(repository_name, file_path) {
    let repository_files_path = version_path_files_get(repository_name);
    let repository_file_path = path_join([
        repository_files_path,
        file_path
    ]);
    return repository_file_path;
}
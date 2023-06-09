import { version_path_sub_get } from '../sub/get.mjs';
import { version_path_files } from '../files.mjs';
export function version_path_files_get(repository_name) {
    let repository_files_directory_name = version_path_files();
    let repository_sub_path = version_path_sub_get(repository_name, repository_files_directory_name);
    return repository_sub_path;
}
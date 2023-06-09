import { path_join } from '../../../path/join.mjs';
import { version_path_root } from '../root.mjs';
export function version_path_sub_get(repository_name, repository_files_directory_name) {
    let repository_container_folder_name = version_path_root();
    let repository_directory = path_join([
        repository_container_folder_name,
        repository_name
    ]);
    let repository_sub_path = path_join([
        repository_directory,
        repository_files_directory_name
    ]);
    return repository_sub_path;
}
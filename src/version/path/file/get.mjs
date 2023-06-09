import { file_extension_json } from '../../../file/extension/json.mjs';
import { path_join } from '../../../path/join.mjs';
import { version_directory_root } from '../../directory/root.mjs';
export function version_path_file_get(repository_name, file_path, version) {
    let repository_container_folder_name = version_directory_root();
    let repository_directory = path_join([
        repository_container_folder_name,
        repository_name
    ]);
    let repository_files_directory_name = 'files';
    let repository_file_path = path_join([
        repository_directory,
        repository_files_directory_name,
        file_path
    ]);
    let initial_file_name = `${ version }${ file_extension_json() }`;
    let repository_file_path_initial = path_join([
        repository_file_path,
        initial_file_name
    ]);
    return repository_file_path_initial;
}
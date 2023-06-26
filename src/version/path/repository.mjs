import { metadata } from '../../metadata.mjs';
import { path_join } from '../../path/join.mjs';
import { version_path_root } from './root.mjs';
export function version_path_repository(repository_name) {
    let repository_container_folder_name = version_path_root();
    let repository_directory = path_join([
        repository_container_folder_name,
        repository_name
    ]);
    return repository_directory;
    metadata([]);
}
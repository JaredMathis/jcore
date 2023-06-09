import { version_file_difference } from '../../file/difference.mjs';
import { version_commit_files_generic } from './generic.mjs';
export async function version_commit_files_difference(repository_name, file_paths, commit_data) {
    return await version_commit_files_generic(repository_name, file_paths, commit_data, version_file_difference);
}
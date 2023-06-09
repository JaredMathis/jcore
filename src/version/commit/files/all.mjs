import { todo } from '../../../todo.mjs';
import { version_commit_data } from '../data.mjs';
import { version_commit_files } from '../files.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { directory_current } from '../../../directory/current.mjs';
export async function version_commit_files_all(repository_name) {
    let directory_path = directory_current();
    let file_paths = await directory_read(directory_path);
    let filtered
    await version_commit_files(repository_name, file_paths, version_commit_data(todo, arguments));
}
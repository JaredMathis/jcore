import { version_file_contents } from '../file/contents.mjs';
import { version_path_outputs } from '../path/outputs.mjs';
import { version_path_sub_get } from '../path/sub/get.mjs';
import { git_ignore_filter } from '../../git/ignore/filter.mjs';
import { directory_read_current } from '../../directory/read/current.mjs';
export async function version_output_generic(repository_name, lambda) {
    let file_paths = await directory_read_current();
    let filtered = await git_ignore_filter(file_paths);
    let repository_sub_path = version_path_sub_get(repository_name, version_path_outputs());
    for (let file_path of filtered) {
        let contents = await version_file_contents(repository_name, file_path);
        await lambda(file_path, contents);
    }
    return repository_sub_path;
}
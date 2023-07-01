import { directory_read } from '../../../../directory/read.mjs';
import { git_ignore_cache } from '../../cache.mjs';
export async function git_ignore_cache_file_paths() {
    let c = git_ignore_cache();
    let file_paths = await directory_read(c);
    return file_paths;
}
import { git_exclude } from '../../exclude.mjs';
import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
export async function git_exclude_ensure_exists(path_output) {
    await directory_exists_ensure(path_output);
    await git_exclude(path_output);
}
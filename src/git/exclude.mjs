import { git_ignore_add_if_not_exists } from './ignore/add/if/not/exists.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { path_is } from '../path/is.mjs';
import { git_remove } from './remove.mjs';
import { assert } from '../assert.mjs';
import { path_exists } from '../path/exists.mjs';
export async function git_exclude(path) {
    arguments_assert(arguments, [path_is]);
    assert(await path_exists(path));
    await git_remove(path);
    await git_ignore_add_if_not_exists(path);
}
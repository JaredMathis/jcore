import { arguments_assert } from '../arguments/assert.mjs';
import { command_line } from '../command/line.mjs';
import { path_is } from '../path/is.mjs';
export async function git_remove(path) {
    arguments_assert(arguments, [path_is]);
    await command_line(`git rm -r --cached ${ path }`);
}
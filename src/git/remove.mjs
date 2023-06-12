import { command_line_try } from '../command/line/try.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { path_is } from '../path/is.mjs';
export async function git_remove(path) {
    arguments_assert(arguments, [path_is]);
    await command_line_try(`git rm -r --cached ${ path }`);
}
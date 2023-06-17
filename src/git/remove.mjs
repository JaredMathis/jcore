import { not } from '../not.mjs';
import { git_command_name } from './command/name.mjs';
import { command_line_try } from '../command/line/try.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { path_is } from '../path/is.mjs';
import { assert } from '../assert.mjs';
import { equal } from '../equal.mjs';
export async function git_remove(path) {
    arguments_assert(arguments, [path_is]);
    let result = await command_line_try(`${ git_command_name() } rm -r --cached ${ path }`);
    if (not(result.success)) {
        let expected = `fatal: pathspec '${ path }' did not match any files\n`;
        assert(equal(result.stderr, expected));
    }
}
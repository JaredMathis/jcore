import { metadata } from '../metadata.mjs';
import { not } from '../not.mjs';
import { git_command_name } from './command/name.mjs';
import { command_line_try } from '../command/line/try.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { path_is } from '../path/is.mjs';
import { assert } from '../assert.mjs';
import { equal } from '../equal.mjs';
export async function git_remove(path) {
    arguments_assert(arguments, [path_is]);
    let v_3 = `${ git_command_name() } rm -r --cached ${ path }`;
    let result = await command_line_try(v_3);
    let v_4 = result.success;
    let v_2 = not(v_4);
    if (v_2) {
        let expected = `fatal: pathspec '${ path }' did not match any files\n`;
        let v_5 = result.stderr;
        let v = equal(v_5, expected);
        assert(v);
    }
    metadata([]);
}
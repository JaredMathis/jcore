import { git_command_name } from '../../command/name.mjs';
import { command_line_try } from '../../../command/line/try.mjs';
import { path_is } from '../../../path/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_reset_hard_head(path) {
    arguments_assert(arguments, [path_is]);
    await command_line_try(`${ git_command_name() } reset --hard HEAD`);
}
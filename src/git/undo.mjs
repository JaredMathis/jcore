import { command_line } from '../command/line.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { git_command_name } from './command/name.mjs';
export async function git_undo() {
    arguments_assert(arguments, []);
    let result = await command_line(`${ git_command_name() } reset --soft HEAD~1`);
    return result;
}
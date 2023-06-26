import { metadata } from '../metadata.mjs';
import { command_line } from '../command/line.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { git_command_name } from './command/name.mjs';
export async function git_undo() {
    arguments_assert(arguments, []);
    let v = `${ git_command_name() } reset --hard HEAD~1`;
    let result = await command_line(v);
    return result;
    metadata([]);
}
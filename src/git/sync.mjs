import { command_line_all } from '../command/line/all.mjs';
import { git_commands_sync_add } from './commands/sync/add.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function git_sync() {
    arguments_assert(arguments, []);
    let commands = [];
    git_commands_sync_add(commands);
    let c_result = await command_line_all(commands);
    return c_result;
}
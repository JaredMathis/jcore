import { metadata } from '../../../../metadata.mjs';
import { command_line_all } from '../../../../command/line/all.mjs';
import { git_commands_sync_add } from '../add.mjs';
export async function git_commands_sync_add_run(sync, commands) {
    if (sync) {
        git_commands_sync_add(commands);
    }
    let c_result = await command_line_all(commands);
    return c_result;
    metadata([]);
}
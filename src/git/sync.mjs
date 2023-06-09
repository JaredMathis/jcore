import { git_commands_sync_add_run } from './commands/sync/add/run.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function git_sync() {
    arguments_assert(arguments, []);
    let c_result = await git_commands_sync_add_run(true, []);
    return c_result;
}
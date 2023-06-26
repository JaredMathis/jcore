import { metadata } from '../metadata.mjs';
import { git_commands_sync_add_run } from './commands/sync/add/run.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function git_sync() {
    arguments_assert(arguments, []);
    let v = true;
    let v_2 = [];
    let c_result = await git_commands_sync_add_run(v, v_2);
    return c_result;
    metadata([]);
}
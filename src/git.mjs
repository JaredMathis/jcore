import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { function_run_arguments } from './function/run/arguments.mjs';
import { git_pacp } from './git/pacp.mjs';
export async function git() {
    let result = await function_run_arguments(arguments);
    await git_pacp();
    return result;
    metadata([]);
}
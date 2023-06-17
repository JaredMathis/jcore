import { git_rhh } from '../rhh.mjs';
import { metadata } from '../../metadata.mjs';
import { function_run_arguments } from '../../function/run/arguments.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function git_no_commit() {
    arguments_assert(arguments, []);
    let result = await function_run_arguments(arguments);
    await git_rhh();
    return result;
    metadata([]);
}
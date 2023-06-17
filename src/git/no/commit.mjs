import { arguments_assert } from '../../arguments/assert.mjs';
import { git_rhh } from '../rhh.mjs';
import { metadata } from '../../metadata.mjs';
import { function_run_arguments } from '../../function/run/arguments.mjs';
import { try_catch_throw_async } from '../../try/catch/throw/async.mjs';
export async function git_no_commit() {
    arguments_assert(arguments, []);
    let args= arguments
    let result = await try_catch_throw_async(async () => {
        await function_run_arguments(args);
    })
    await git_rhh();
    return result;
    metadata([]);
}
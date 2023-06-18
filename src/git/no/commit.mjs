import { try_catch_finally_async } from '../../try/catch/finally/async.mjs';
import { git_rhh } from '../rhh.mjs';
import { metadata } from '../../metadata.mjs';
import { function_run_arguments } from '../../function/run/arguments.mjs';
export async function git_no_commit() {
    let args = arguments;
    let result = await try_catch_finally_async(async function v() {
        await function_run_arguments(args);
    }, git_rhh);
    return result;
    metadata([]);
}
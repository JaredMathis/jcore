import { metadata_arguments_assert_none } from './metadata/arguments/assert/none.mjs';
import { metadata } from './metadata.mjs';
import { function_run_arguments } from './function/run/arguments.mjs';
import { git_ac } from './git/ac.mjs';
export async function git() {
    let result = await function_run_arguments(arguments);
    await git_ac();
    return result;
    metadata([metadata_arguments_assert_none()]);
}
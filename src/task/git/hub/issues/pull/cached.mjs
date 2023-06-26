import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { task_git_hub_issues_pull_generic } from './generic.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function task_git_hub_issues_pull_cached() {
    arguments_assert(arguments, []);
    const no_cache = boolean_value_false();
    let v = await task_git_hub_issues_pull_generic(no_cache);
    return v;
    metadata([]);
}
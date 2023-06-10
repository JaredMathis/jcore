import { string_difference_get2 } from './string/difference/get2.mjs';
import { log } from './log.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = '';
    let right = 'b';
    let result = string_difference_get2(left, right);
    console.log({ result });
}
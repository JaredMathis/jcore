import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_length } from './string/length.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);

    let left = "abba";
    let right = "abbba";
    for (let i = 0; i < string_length(left); i++) {
        for (let j = 0; j < string_length(right); j++) {
            let i2 = i;
            let j2 = j;
        }
    }
}
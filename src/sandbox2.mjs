import { string_get } from './string/get.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_length } from './string/length.mjs';
import { equal } from './equal.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = 'abba';
    let right = 'abbba';
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
            let i2 = i;
            let j2 = j;
            for (let offset = 0; i2 + offset < left.length && j2 + offset < right.length; offset++) {
                let i2_offset = left[i2 + offset];
                let j2_offset = right[j2 + offset];
                if (!i2_offset, j2_offset)) {

                }
            }
        }
    }
}
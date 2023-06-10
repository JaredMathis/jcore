import { string_get } from './string/get.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_length } from './string/length.mjs';
import { equal } from './equal.mjs';
import { string_sub } from './string/sub.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = 'abba';
    let right = 'abbba';
    let offset_max = 0;
    for (let left_index = 0; left_index < left.length; left_index++) {
        for (let right_index = 0; right_index < right.length; right_index++) {
            let offset = string_sub_max_starting_at(left, right, left_index, right_index)
            console.log(offset, string_sub(left, left_index, left_index + offset))
        }
    }
}

function string_sub_max_starting_at(left, right, left_index, right_index) {
    let left_walker = left_index;
    let right_walker = right_index;
    let offset;
    for (offset = 0; left_walker + offset < left.length && right_walker + offset < right.length; offset++) {
        let left_offset = left[left_walker + offset];
        let right_offset = right[right_walker + offset];
        if (left_offset !== right_offset) {
            break;
        }
    }
    return offset;
}
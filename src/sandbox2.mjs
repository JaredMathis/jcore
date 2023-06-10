import { string_get } from './string/get.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_length } from './string/length.mjs';
import { equal } from './equal.mjs';
import { string_sub } from './string/sub.mjs';
import { object_property_get } from './object/property/get.mjs';
import { string_skip } from './string/skip.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = 'a';
    let right = 'b';
    let max = string_sub_max(left, right);
    let offset = object_property_get(max, string_sub_max_property_offset())
    let left_index = object_property_get(max, string_sub_max_property_left_index())
    let right_index = object_property_get(max, string_sub_max_property_right_index())
    if (offset === 0) {
        return {
            left,
            right
        }
    }
    let left_lr = string_left_right(left, left_index, offset);
    let right_lr = string_left_right(right, right_index, offset);
    console.log({left_lr, right_lr})
}

function string_left_right(s, index, offset) {
    let left = string_sub(s, 0, index);
    let right = string_skip(s, index + offset);
    return { [string_left_right_property_left()]: left, [string_left_right_property_right()]: right };
}

function string_left_right_property_right() {
    return 'right';
}

function string_left_right_property_left() {
    return 'left';
}

function string_sub_max(left, right) {
    let offset_max = 0;
    let left_index_max;
    let right_index_max;
    for (let left_index = 0; left_index < left.length; left_index++) {
        for (let right_index = 0; right_index < right.length; right_index++) {
            let offset = string_sub_max_starting_at(left, right, left_index, right_index);
            if (offset > offset_max) {
                offset_max = offset;
                left_index_max = left_index;
                right_index_max = right_index;
            }
        }
    }
    let result = {
        [string_sub_max_property_offset()]: offset_max,
        [string_sub_max_property_left_index()]: left_index_max,
        [string_sub_max_property_right_index()]: right_index_max,
    };
    return result;
}

function string_sub_max_property_right_index() {
    return 'right_index';
}

function string_sub_max_property_left_index() {
    return 'left_index';
}

function string_sub_max_property_offset() {
    return 'offset';
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
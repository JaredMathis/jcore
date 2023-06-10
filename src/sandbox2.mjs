import { string_left_right } from './string/left/right.mjs';
import { string_sub_max_property_right_index } from './string/sub/max/property/right/index.mjs';
import { string_sub_max_property_left_index } from './string/sub/max/property/left/index.mjs';
import { string_sub_max_property_offset } from './string/sub/max/property/offset.mjs';
import { string_sub_max } from './string/sub/max.mjs';
import { log } from './log.mjs';
import { string_empty_is } from './string/empty/is.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { object_property_get } from './object/property/get.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = '';
    let right = 'b';
    let max = string_sub_max(left, right);
    let offset = object_property_get(max, string_sub_max_property_offset());
    let left_index = object_property_get(max, string_sub_max_property_left_index());
    let right_index = object_property_get(max, string_sub_max_property_right_index());
    if (offset === 0) {
        if (string_empty_is()) {
        }
    }
    let left_lr = string_left_right(left, left_index, offset);
    let right_lr = string_left_right(right, right_index, offset);
    console.log({
        left_lr,
        right_lr
    });
}
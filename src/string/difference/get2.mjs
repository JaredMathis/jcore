import { string_left_right_property_right } from '../left/right/property/right.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_left_right } from '../left/right.mjs';
import { list_single_item } from '../../list/single/item.mjs';
import { string_empty_is } from '../empty/is.mjs';
import { string_sub_max_property_right_index } from '../sub/max/property/right/index.mjs';
import { string_sub_max_property_left_index } from '../sub/max/property/left/index.mjs';
import { string_sub_max_property_offset } from '../sub/max/property/offset.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { string_sub_max } from '../sub/max.mjs';
import { equal } from '../../equal.mjs';
import { string_left_right_property_left } from '../left/right/property/left.mjs';
import { string_is } from '../is.mjs';
export function string_difference_get2(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    if (equal(left, right)) {
        return [];
    }
    let max = string_sub_max(left, right);
    let offset = object_property_get(max, string_sub_max_property_offset());
    let left_index = object_property_get(max, string_sub_max_property_left_index());
    let right_index = object_property_get(max, string_sub_max_property_right_index());
    if (offset === 0) {
        if (string_empty_is(left)) {
            return list_single_item('+' + right);
        }
        if (string_empty_is(right)) {
            return list_single_item('-' + left);
        }
    }
    let left_lr = string_left_right(left, left_index, offset);
    let left_left = object_property_get(left_lr, string_left_right_property_left());
    let left_right = object_property_get(left_lr, string_left_right_property_right());
    let left_result = string_difference_get2(left_left, left_right);
    let right_lr = string_left_right(right, right_index, offset);
    let right_left = object_property_get(right_lr, string_left_right_property_left());
    let right_right = object_property_get(right_lr, string_left_right_property_right());
    let right_result = string_difference_get2(right_left, right_right);
    return {
        left_lr,
        right_lr
    };
}
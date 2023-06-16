import { string_length } from '../../length.mjs';
import { string_difference_added } from '../added.mjs';
import { string_difference_removed } from '../removed.mjs';
import { list_add_multiple } from '../../../list/add/multiple.mjs';
import { string_left_right_property_right } from '../../left/right/property/right.mjs';
import { string_left_right_property_left } from '../../left/right/property/left.mjs';
import { string_split_at } from '../../split/at.mjs';
import { list_add } from '../../../list/add.mjs';
import { string_empty_not_is } from '../../empty/not/is.mjs';
import { string_sub_max_property_right_index } from '../../sub/max/property/right/index.mjs';
import { string_sub_max_property_left_index } from '../../sub/max/property/left/index.mjs';
import { string_sub_max_property_offset } from '../../sub/max/property/offset.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { string_sub_max } from '../../sub/max.mjs';
import { equal } from '../../../equal.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_difference_get_recursive(left, right, left_offset, right_offset) {
    arguments_assert(arguments, [
        string_is,
        string_is,
        integer_is,
        integer_is
    ]);
    let result = [];
    if (equal(left, right)) {
        return result;
    }
    let max = string_sub_max(left, right);
    let offset = object_property_get(max, string_sub_max_property_offset());
    let left_index = object_property_get(max, string_sub_max_property_left_index());
    let right_index = object_property_get(max, string_sub_max_property_right_index());
    if (offset === 0) {
        if (string_empty_not_is(left)) {
            const position = left_index + left_offset;
            list_add(result, position + string_difference_removed() + string_length(left));
        }
        if (string_empty_not_is(right)) {
            const position = right_index + right_offset;
            list_add(result, position + string_difference_added() + right);
        }
        return result;
    }
    let left_lr = string_split_at(left, left_index, offset);
    let left_left = object_property_get(left_lr, string_left_right_property_left());
    let left_right = object_property_get(left_lr, string_left_right_property_right());
    let right_lr = string_split_at(right, right_index, offset);
    let right_left = object_property_get(right_lr, string_left_right_property_left());
    let right_right = object_property_get(right_lr, string_left_right_property_right());
    let left_result = string_difference_get_recursive(left_left, right_left, left_offset, right_offset);
    list_add_multiple(result, left_result);
    let right_result = string_difference_get_recursive(left_right, right_right, left_offset + offset + left_index, right_offset + offset + right_index);
    list_add_multiple(result, right_result);
    return result;
}
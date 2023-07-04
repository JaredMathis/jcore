import { string_sub_max_2 } from '../../sub/max/2.mjs';
import { speed_log } from '../../../speed/log.mjs';
import { speed_next } from '../../../speed/next.mjs';
import { speed_start } from '../../../speed/start.mjs';
import { metadata } from '../../../metadata.mjs';
import { add } from '../../../add.mjs';
import { string_to } from '../../to.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { string_length } from '../../length.mjs';
import { string_difference_added } from '../added.mjs';
import { string_difference_removed } from '../removed.mjs';
import { list_add_multiple } from '../../../list/add/multiple.mjs';
import { string_split_at_property_right } from '../../split/at/property/right.mjs';
import { string_split_at_property_left } from '../../split/at/property/left.mjs';
import { string_split_at_skip } from '../../split/at/skip.mjs';
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
import { string_combine_multiple } from '../../combine/multiple.mjs';
export function string_difference_get_recursive(left, right, left_offset, right_offset) {
    arguments_assert(arguments, [
        string_is,
        string_is,
        integer_is,
        integer_is
    ]);
    let result = [];
    let v_8 = equal(left, right);
    if (v_8) {
        return result;
    }

    let max;
    let max2;
    function lambda(checkpoint) {
        max = string_sub_max(left, right);
        checkpoint();
        max2 = string_sub_max_2(left, right);
    }
    speed_group(lambda, checkpoint);
    let v = string_sub_max_property_offset();
    let offset = object_property_get(max, v);
    let v_2 = string_sub_max_property_left_index();
    let left_index = object_property_get(max, v_2);
    let v_3 = string_sub_max_property_right_index();
    let right_index = object_property_get(max, v_3);
    let v_12 = integer_value_0();
    let v_9 = equal(offset, v_12);
    if (v_9) {
        let v_10 = string_empty_not_is(left);
        if (v_10) {
            const position = add(left_index, left_offset);
            let v_21 = string_length(left);
            let v_17 = [
                string_to(position),
                string_difference_removed(),
                string_to(v_21)
            ];
            let v_13 = string_combine_multiple(v_17);
            list_add(result, v_13);
        }
        let v_11 = string_empty_not_is(right);
        if (v_11) {
            const position = add(right_index, right_offset);
            let v_18 = [
                string_to(position),
                string_difference_added(),
                string_to(right)
            ];
            let v_14 = string_combine_multiple(v_18);
            list_add(result, v_14);
        }
        return result;
    }
    let left_lr = string_split_at_skip(left, left_index, offset);
    let v_4 = string_split_at_property_left();
    let left_left = object_property_get(left_lr, v_4);
    let v_5 = string_split_at_property_right();
    let left_right = object_property_get(left_lr, v_5);
    let right_lr = string_split_at_skip(right, right_index, offset);
    let v_6 = string_split_at_property_left();
    let right_left = object_property_get(right_lr, v_6);
    let v_7 = string_split_at_property_right();
    let right_right = object_property_get(right_lr, v_7);
    let left_result = string_difference_get_recursive(left_left, right_left, left_offset, right_offset);
    list_add_multiple(result, left_result);
    let v_19 = add(left_offset, offset);
    let v_15 = add(v_19, left_index);
    let v_20 = add(right_offset, offset);
    let v_16 = add(v_20, right_index);
    let right_result = string_difference_get_recursive(left_right, right_right, v_15, v_16);
    list_add_multiple(result, right_result);
    return result;
    metadata([]);
}

function speed_group(lambda) {
    function checkpoint() {
        speed_next(s);
    }
    let s = speed_start();
    lambda(checkpoint);
    checkpoint();
    speed_log(s);
    return s;
}

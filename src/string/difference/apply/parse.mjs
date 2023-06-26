import { metadata } from '../../../metadata.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { not } from '../../../not.mjs';
import { count } from '../../../count.mjs';
import { string_difference_property_removed } from '../property/removed.mjs';
import { equal } from '../../../equal.mjs';
import { string_difference_property_added } from '../property/added.mjs';
import { string_difference_property_operation } from '../property/operation.mjs';
import { string_difference_property_position } from '../property/position.mjs';
import { string_sub } from '../../sub.mjs';
import { list_min } from '../../../list/min.mjs';
import { string_index_of_try_valid } from '../../index/of/try/valid.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
import { string_index_of_try } from '../../index/of/try.mjs';
import { string_difference_removed } from '../removed.mjs';
import { string_difference_added } from '../added.mjs';
import { error } from '../../../error.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
import { add_1 } from '../../../add/1.mjs';
import { string_length } from '../../length.mjs';
import { list_map } from '../../../list/map.mjs';
import { object_property_initialize } from '../../../object/property/initialize.mjs';
import { assert } from '../../../assert.mjs';
import { string_empty_is } from '../../empty/is.mjs';
export function string_difference_apply_parse(hunk) {
    arguments_assert(arguments, [string_is]);
    let operations = [
        string_difference_removed(),
        string_difference_added()
    ];
    let v_11 = function v_6(o) {
        let v_7 = string_index_of_try(hunk, o);
        return v_7;
    };
    let indexes = list_map(operations, v_11);
    let valid = list_filter(indexes, string_index_of_try_valid);
    let v_8 = list_empty(valid);
    if (v_8) {
        error();
    }
    let valid_min = list_min(valid);
    let v_12 = integer_value_0();
    let position_string = string_sub(hunk, v_12, valid_min);
    let position = integer_parse(position_string);
    const valid_min_add_1 = add_1(valid_min);
    let operation = string_sub(hunk, valid_min, valid_min_add_1);
    let v = string_length(hunk);
    let after = string_sub(hunk, valid_min_add_1, v);
    const result = {
        [string_difference_property_position()]: position,
        [string_difference_property_operation()]: operation
    };
    let v_13 = string_difference_removed();
    let v_9 = equal(operation, v_13);
    let v_14 = string_difference_added();
    let v_10 = equal(operation, v_14);
    if (v_9) {
        let count = integer_parse(after);
        let v_15 = count >= integer_value_1();
        assert(v_15);
        let v_2 = string_difference_property_removed();
        object_property_initialize(result, v_2, count);
    } else if (v_10) {
        let v_5 = string_empty_is(after);
        let v_3 = not(v_5);
        assert(v_3);
        let v_4 = string_difference_property_added();
        object_property_initialize(result, v_4, after);
    } else {
        error();
    }
    return result;
    metadata([]);
}
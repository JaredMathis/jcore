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
    let indexes = list_map(operations, function v_6(o) {
        let v_7 = string_index_of_try(hunk, o);
        return v_7;
    });
    let valid = list_filter(indexes, string_index_of_try_valid);
    if (list_empty(valid)) {
        error();
    }
    let valid_min = list_min(valid);
    let position_string = string_sub(hunk, 0, valid_min);
    let position = integer_parse(position_string);
    const valid_min_add_1 = add_1(valid_min);
    let operation = string_sub(hunk, valid_min, valid_min_add_1);
    let v = string_length(hunk);
    let after = string_sub(hunk, valid_min_add_1, v);
    const result = {
        [string_difference_property_position()]: position,
        [string_difference_property_operation()]: operation
    };
    if (equal(operation, string_difference_removed())) {
        let count = integer_parse(after);
        assert(count >= 1);
        let v_2 = string_difference_property_removed();
        object_property_initialize(result, v_2, count);
    } else if (equal(operation, string_difference_added())) {
        let v_5 = string_empty_is(after);
        let v_3 = not(v_5);
        assert(v_3);
        let v_4 = string_difference_property_added();
        object_property_initialize(result, v_4, after);
    } else {
        error();
    }
    return result;
}
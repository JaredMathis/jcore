import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { metadata } from '../../../metadata.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { not } from '../../../not.mjs';
import { string_to_case_lower } from '../../to/case/lower.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_sub } from '../../sub.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { list_map_property } from '../../../list/map/property.mjs';
import { list_filter_property } from '../../../list/filter/property.mjs';
import { string_case_upper_is } from '../upper/is.mjs';
import { list_map_with_index } from '../../../list/map/with/index.mjs';
import { string_to_list } from '../../to/list.mjs';
import { equal } from '../../../equal.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_length } from '../../../list/length.mjs';
import { string_empty } from '../../empty.mjs';
import { list_map } from '../../../list/map.mjs';
export function string_case_pascal_parse(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let characters = string_to_list(input);
    const property_is_capital = 'is_capital';
    const property_index = 'index';
    let v_6 = function v_2(c, index) {
        let v_12 = string_case_upper_is(c);
        return {
            [property_is_capital]: v_12,
            [property_index]: index
        };
    };
    let mapped = list_map_with_index(characters, v_6);
    let v_7 = boolean_value_true();
    console.log({mapped})
    let filtered = list_filter_property(mapped, property_is_capital, v_7);
    let indices = list_map_property(filtered, property_index);
    let v = list_length(characters);
    list_add(indices, v);
    let v_8 = function v_3(list_new_then_add) {
        let previous = integer_value_0();
        for (let index of indices) {
            let v_9 = integer_value_0();
            let v_4 = equal(index, v_9);
            if (v_4) {
                continue;
            }
            let part = string_sub(input, previous, index);
            let v_11 = string_empty();
            let v_10 = equal(part, v_11);
            let v_5 = not(v_10);
            if (v_5) {
                list_new_then_add(part);
            }
            previous = index;
        }
    };
    let parts = list_adder(v_8);
    let parts_case_lower = list_map(parts, string_to_case_lower);
    return parts_case_lower;
    metadata([]);
}
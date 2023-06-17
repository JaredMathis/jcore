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
export function string_case_camel_parse(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let characters = string_to_list(input);
    const property_is_capital = 'is_capital';
    const property_index = 'index';
    let mapped = list_map_with_index(characters, (c, index) => {
        return {
            [property_is_capital]: string_case_upper_is(c),
            [property_index]: index
        };
    });
    let filtered = list_filter_property(mapped, property_is_capital, true);
    let indices = list_map_property(filtered, property_index);
    list_add(indices, list_length(characters));
    let parts = list_adder(list_new_then_add => {
        let previous = 0;
        for (let index of indices) {
            if (equal(index, 0)) {
                continue;
            }
            let part = string_sub(input, previous, index);
            if (!(equal(part, string_empty()))) {
                list_new_then_add(part);
            }
            previous = index;
        }
    });
    let parts_case_lower = list_map(parts, string_to_case_lower);
    return parts_case_lower;
}
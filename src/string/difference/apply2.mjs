import { string_left_right_property_right } from '../left/right/property/right.mjs';
import { string_left_right_property_left } from '../left/right/property/left.mjs';
import { string_left_right } from '../left/right.mjs';
import { string_difference_added } from './added.mjs';
import { string_difference_removed } from './removed.mjs';
import { string_difference_property_added } from './property/added.mjs';
import { string_difference_property_position } from './property/position.mjs';
import { string_difference_property_operation } from './property/operation.mjs';
import { string_difference_apply2_parse } from './apply2/parse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { list_is } from '../../list/is.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { error } from '../../error.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { equal } from '../../equal.mjs';
import { string_difference_property_removed } from './property/removed.mjs';
import { add } from '../../add.mjs';
export function string_difference_apply2(string_old, hunks) {
    arguments_assert(arguments, [
        string_is,
        list_is
    ]);
    if (list_length_is_0(hunks)) {
        return string_old;
    }
    let mapped = list_map(hunks, string_difference_apply2_parse);
    let value = string_old;
    for (let m of mapped) {
        let position = object_property_get(m, string_difference_property_position());
        let operation = object_property_get(m, string_difference_property_operation());
        if (equal(operation, string_difference_removed())) {
            let removed = object_property_get(m, string_difference_property_removed());
            let lr = string_left_right(value, position, add(position, removed));
            let left = object_property_get(lr, string_left_right_property_left());
            let right = object_property_get(lr, string_left_right_property_right());
            value = `${ left }${ right }`;
        } else if (equal(operation, string_difference_added())) {
            let added = object_property_get(m, string_difference_property_added());
            error();
        } else {
            error();
        }
    }
    return value;
}
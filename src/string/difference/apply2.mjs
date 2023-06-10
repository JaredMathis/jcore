import { string_get } from '../get.mjs';
import { string_difference_added } from './added.mjs';
import { string_difference_removed } from './removed.mjs';
import { string_difference_property_text } from './property/text.mjs';
import { string_difference_property_position } from './property/position.mjs';
import { string_difference_property_operation } from './property/operation.mjs';
import { string_difference_apply2_parse } from './apply2/parse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { list_is } from '../../list/is.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { error } from '../../error.mjs';
import { json_to } from '../../json/to.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { equal } from '../../equal.mjs';
import { string_length } from '../length.mjs';
import { assert } from '../../assert.mjs';
import { range } from '../../range.mjs';
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
        let text = object_property_get(m, string_difference_property_text());
        if (equal(operation, string_difference_removed())) {
            for (let i of range(string_length(text))) {
                let text_i = string_get(text, i);
                let value_i = string_get(value, position + i);
                assert(equal());
            }
        } else if (equal(operation, string_difference_added())) {
            error();
        } else {
            error();
        }
    }
    error(json_to({
        string_old,
        mapped
    }));
}
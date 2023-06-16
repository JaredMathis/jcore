import { string_difference_property_added } from './property/added.mjs';
import { value_new } from '../../value/new.mjs';
import { list_sort_property_generic } from '../../list/sort/property/generic.mjs';
import { list_filter_property } from '../../list/filter/property.mjs';
import { string_split_at_property_right } from '../split/at/property/right.mjs';
import { string_split_at_property_left } from '../split/at/property/left.mjs';
import { string_split_at } from '../split/at.mjs';
import { string_difference_added } from './added.mjs';
import { string_difference_removed } from './removed.mjs';
import { string_difference_property_position } from './property/position.mjs';
import { string_difference_property_operation } from './property/operation.mjs';
import { string_difference_apply_parse } from './apply/parse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { list_is } from '../../list/is.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { equal } from '../../equal.mjs';
import { string_difference_property_removed } from './property/removed.mjs';
import { add } from '../../add.mjs';
import { assert } from '../../assert.mjs';
import { list_length } from '../../list/length.mjs';
export function string_difference_apply(string_old, hunks) {
    arguments_assert(arguments, [
        string_is,
        list_is
    ]);
    if (list_length_is_0(hunks)) {
        return string_old;
    }
    let mapped = list_map(hunks, string_difference_apply_parse);
    let removals = list_filter_property(mapped, string_difference_property_operation(), string_difference_removed());
    list_sort_property_generic(removals, string_difference_property_position(), true);
    let addeds = list_filter_property(mapped, string_difference_property_operation(), string_difference_added());
    assert(equal(list_length(mapped), add(list_length(removals), list_length(addeds))));
    list_sort_property_generic(addeds, string_difference_property_position(), false);
    let value = string_old;
    for (let m of removals) {
        let position = object_property_get(m, string_difference_property_position());
        let removed = object_property_get(m, string_difference_property_removed());
        let lr = string_split_at(value, position, removed);
        let left = object_property_get(lr, string_split_at_property_left());
        let right = object_property_get(lr, string_split_at_property_right());
        let value_new = `${ left }${ right }`;
        value = value_new;
    }
    for (let m of addeds) {
        let position = object_property_get(m, string_difference_property_position());
        let added = object_property_get(m, string_difference_property_added());
        let lr = string_split_at(value, position, 0);
        let left = object_property_get(lr, string_split_at_property_left());
        let right = object_property_get(lr, string_split_at_property_right());
        let value_new = `${ left }${ added }${ right }`;
        value = value_new;
    }
    return value;
}
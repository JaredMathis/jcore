import { string_split_at } from '../split/at.mjs';
import { string_difference_property_added } from './property/added.mjs';
import { value_new } from '../../value/new.mjs';
import { list_sort_property_generic } from '../../list/sort/property/generic.mjs';
import { list_filter_property } from '../../list/filter/property.mjs';
import { string_split_at_property_right } from '../split/at/property/right.mjs';
import { string_split_at_property_left } from '../split/at/property/left.mjs';
import { string_split_at_skip } from '../split/at/skip.mjs';
import { string_difference_added } from './added.mjs';
import { string_difference_removed } from './removed.mjs';
import { string_difference_property_position } from './property/position.mjs';
import { string_difference_property_operation } from './property/operation.mjs';
import { string_difference_apply_parse } from './apply/parse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { list_is } from '../../list/is.mjs';
import { list_empty } from '../../list/empty.mjs';
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
    let v_20 = list_empty(hunks);
    if (v_20) {
        return string_old;
    }
    let mapped = list_map(hunks, string_difference_apply_parse);
    let v = string_difference_property_operation();
    let v_2 = string_difference_removed();
    let removals = list_filter_property(mapped, v, v_2);
    let v_3 = string_difference_property_position();
    list_sort_property_generic(removals, v_3, true);
    let v_4 = string_difference_property_operation();
    let v_5 = string_difference_added();
    let addeds = list_filter_property(mapped, v_4, v_5);
    let v_16 = list_length(mapped);
    let v_18 = list_length(removals);
    let v_19 = list_length(addeds);
    let v_17 = add(v_18, v_19);
    let v_6 = equal(v_16, v_17);
    assert(v_6);
    let v_7 = string_difference_property_position();
    list_sort_property_generic(addeds, v_7, false);
    let value = string_old;
    for (let m of removals) {
        let v_8 = string_difference_property_position();
        let position = object_property_get(m, v_8);
        let v_9 = string_difference_property_removed();
        let removed = object_property_get(m, v_9);
        let lr = string_split_at_skip(value, position, removed);
        let v_10 = string_split_at_property_left();
        let left = object_property_get(lr, v_10);
        let v_11 = string_split_at_property_right();
        let right = object_property_get(lr, v_11);
        let value_new = `${ left }${ right }`;
        value = value_new;
    }
    for (let m of addeds) {
        let v_12 = string_difference_property_position();
        let position = object_property_get(m, v_12);
        let v_13 = string_difference_property_added();
        let added = object_property_get(m, v_13);
        let lr = string_split_at(value, position);
        let v_14 = string_split_at_property_left();
        let left = object_property_get(lr, v_14);
        let v_15 = string_split_at_property_right();
        let right = object_property_get(lr, v_15);
        let value_new = `${ left }${ added }${ right }`;
        value = value_new;
    }
    return value;
}
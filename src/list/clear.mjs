import { metadata } from '../metadata.mjs';
import { integer_value_0 } from '../integer/value/0.mjs';
import { list_property_length } from './property/length.mjs';
import { object_property_change } from '../object/property/change.mjs';
export function list_clear(list) {
    let v = list_property_length();
    let v_2 = integer_value_0();
    object_property_change(list, v, v_2);
    metadata([]);
}
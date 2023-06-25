import { integer_value_0 } from '../integer/value/0.mjs';
import { list_property_length } from './property/length.mjs';
import { object_property_change } from '../object/property/change.mjs';
export function list_clear(list) {
    let v = list_property_length();
    object_property_change(list, v, integer_value_0());
}
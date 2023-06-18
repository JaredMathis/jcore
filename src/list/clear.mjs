import { list_property_length } from './property/length.mjs';
import { object_property_change } from '../object/property/change.mjs';
export function list_clear(list) {
    object_property_change(list, list_property_length(), 0);
}
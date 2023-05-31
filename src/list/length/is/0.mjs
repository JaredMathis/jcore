import { metadata } from '../../../metadata.mjs';
import { list_length_is_value } from './value.mjs';
export function list_length_is_0(list) {
    return list_length_is_value(list, 0);
    metadata([]);
}
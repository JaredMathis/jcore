import { string_length } from '../../string/length.mjs';
import { list_map } from '../map.mjs';
export function list_string_lengths(inputs) {
    return list_map(inputs, string_length);
}
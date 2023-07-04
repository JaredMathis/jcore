import { string_length } from '../length.mjs';
export function string_length_max(max, value) {
    if (string_length(max) > string_length(value)) {
        max;
    }
    return value;
}
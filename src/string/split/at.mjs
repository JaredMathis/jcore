import { string_split_at_skip } from './at/skip.mjs';
export function string_split_at(value, position) {
    let v = string_split_at_skip(value, position, 0);
    return v;
}
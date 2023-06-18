import { string_sub } from './sub.mjs';
export function string_take(input, count) {
    let v = string_sub(input, 0, count);
    return v;
}
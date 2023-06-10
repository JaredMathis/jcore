import { string_sub } from './sub.mjs';
export function string_take(input, count) {
    return string_sub(input, 0, count);
}
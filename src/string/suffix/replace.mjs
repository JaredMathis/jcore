import { string_add } from '../add.mjs';
import { string_suffix_without } from './without.mjs';
export function string_suffix_replace(string_old, suffix_old, suffix_new) {
    let suffix_without = string_suffix_without(string_old, suffix_old);
    let string_new = string_add(suffix_without, suffix_new);
    return string_new;
}
import { string_prefix_without } from './without.mjs';
import { todo } from '../../todo.mjs';
export function string_prefix_replace(input, prefix_old, prefix_new) {
    let prefix_without = string_prefix_without(input, prefix_old);
    return prefix_new + prefix_without;
}
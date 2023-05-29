import { string_prefix_without } from './without.mjs';
import { assert } from '../../assert.mjs';
import { todo } from '../../todo.mjs';
import { string_starts_with } from '../starts/with.mjs';
export function string_prefix_replace(input, prefix_old, prefix_new) {
    assert(string_starts_with(input, prefix_old));
    let prefix_without = string_prefix_without(input, prefix_old);
    todo();
}
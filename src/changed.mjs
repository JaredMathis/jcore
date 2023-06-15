import { error } from './error.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function changed() {
    arguments_assert(arguments, []);
    error('todo: changed');
}
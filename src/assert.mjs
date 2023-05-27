import { error } from './error.mjs';
import { arguments_count } from './arguments/count.mjs';

export function assert(value) {
    arguments_count(arguments, 1);
    if (value === true) {
        return;
    }
    error('Assertion failed');
}
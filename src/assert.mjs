import { error } from './error.mjs';

export function assert(value) {
    if (arguments.length !== 1) {
        error('Invalid argument count: ' + arguments.length);
    }
    if (value === true) {
        return;
    }
    error('Assertion failed');
}
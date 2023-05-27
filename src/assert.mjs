import { error } from './error.mjs';

export function assert(value) {
    if (value === true) {
        return;
    }
    error('Assertion failed');
}
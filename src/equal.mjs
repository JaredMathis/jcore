import { metadata } from './metadata.mjs';
import { defined_is } from './defined/is.mjs';
import { error } from './error.mjs';
export function equal(left, right) {
    if (arguments.length !== 2) {
        error();
    }
    if (!defined_is(left)) {
        error();
    }
    if (!defined_is(right)) {
        error();
    }
    return left === right;
    metadata([]);
}
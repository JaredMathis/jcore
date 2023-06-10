import { random_get } from './get.mjs';
import { number_floor } from '../number/floor.mjs';
import { assert } from '../assert.mjs';
export function random_between(lower, upper) {
    assert(lower < upper);
    let difference = upper - lower + 1;
    return number_floor(difference * random_get()) + lower;
}
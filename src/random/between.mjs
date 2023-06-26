import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
import { multiply } from '../multiply.mjs';
import { subtract } from '../subtract.mjs';
import { less_than } from '../less/than.mjs';
import { integer_value_1 } from '../integer/value/1.mjs';
import { random_get } from './get.mjs';
import { number_floor } from '../number/floor.mjs';
import { assert } from '../assert.mjs';
export function random_between(lower, upper) {
    assert(less_than(lower, upper));
    let difference = add(subtract(upper, lower), integer_value_1());
    return add(number_floor(multiply(difference, random_get())), lower);
    metadata([]);
}
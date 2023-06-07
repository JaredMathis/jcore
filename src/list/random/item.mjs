import { list_get } from '../get.mjs';
import { integer_floor } from '../../integer/floor.mjs';
import { list_length } from '../length.mjs';
import { random_get } from '../../random/get.mjs';
export function list_random_item(values) {
    let random = random_get();
    let length = list_length(values);
    let index = integer_floor(random * length);
    let value = list_get(values, index);
    return value;
}
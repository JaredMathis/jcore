import { list_get } from '../get.mjs';
import { number_floor } from '../../number/floor.mjs';
import { list_length } from '../length.mjs';
import { random_get } from '../../random/get.mjs';
export function list_random_item(values) {
    let random = random_get();
    let length = list_length(values);
    let index = number_floor(random * length);
    let value = list_get(values, index);
    return value;
}
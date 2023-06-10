import { string_left_right_property_right } from './right/property/right.mjs';
import { string_left_right_property_left } from './right/property/left.mjs';
import { string_skip } from '../skip.mjs';
import { string_sub } from '../sub.mjs';
export function string_left_right(s, index, offset) {
    let left = string_sub(s, 0, index);
    let right = string_skip(s, index + offset);
    return {
        [string_left_right_property_left()]: left,
        [string_left_right_property_right()]: right
    };
}
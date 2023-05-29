import { assert } from "../assert.mjs";
import { array_first } from "./first.mjs";
import { array_length_is_1 } from "./length/is/1.mjs";

export function array_single(list) {
    assert(array_length_is_1(list, 1));
    let result = array_first(list);
    return result;
}
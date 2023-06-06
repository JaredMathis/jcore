import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_intersection } from './intersection.mjs';
export function list_unique(list) {
    arguments_assert(arguments, [list_is]);
    return list_intersection(list, list);
    metadata([]);
}
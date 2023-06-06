import { list_add_if_not_exists } from './add/if/not/exists.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_unique(list) {
    arguments_assert(arguments, [list_is]);
    let result = [];
    for (let element of list) {
        list_add_if_not_exists(result, element);
    }
    return result;
    metadata([]);
}
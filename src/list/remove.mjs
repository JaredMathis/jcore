import { list_is } from './is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_index_of } from './index/of.mjs';
import { list_remove_at } from './remove/at.mjs';
export function list_remove(list, element) {
    arguments_assert(arguments, [
        list_is,
        tautology
    ]);
    let index = list_index_of(list, element);
    list_remove_at(list, index);
    metadata([]);
}
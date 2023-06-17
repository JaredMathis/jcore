import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_contains } from '../contains.mjs';
import { list_filter } from '../filter.mjs';
export function list_without_multiple(list, values) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    return list_filter(list, element => !(list_contains(values, element)));
    metadata([]);
}
import { metadata } from '../../metadata.mjs';
import { list_find_generic } from './generic.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_find_first(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let or_null = false;
    return list_find_generic(list, predicate, or_null, false);
    metadata([]);
}
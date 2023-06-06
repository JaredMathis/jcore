import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { list_is } from '../is.mjs';
import { defined_is } from '../../defined/is.mjs';
export function list_index_of(list, element) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let result = list.indexOf(element);
    assert(result >= 0);
    return result;
    metadata([]);
}
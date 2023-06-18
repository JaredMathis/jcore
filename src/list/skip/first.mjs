import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_skip } from '../skip.mjs';
export function list_skip_first(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_skip(list, 1);
    return v;
    metadata([]);
}
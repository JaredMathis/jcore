import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_length } from '../length.mjs';
export function list_length_multiple(matches) {
    arguments_assert(arguments, [list_is]);
    return list_length(matches) >= 2;
}
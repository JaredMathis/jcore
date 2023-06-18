import { list_is } from '../is.mjs';
import { not } from '../../not.mjs';
import { list_empty } from '../empty.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_empty_not(list) {
    arguments_assert(arguments, [list_is]);
    let result_to_be_mapped = list_empty(list);
    let result = not(result_to_be_mapped);
    return result;
}
import { not } from '../../not.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_is } from '../is.mjs';
import { list_contains } from '../contains.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_contains_not(list, element) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let result = not(list_contains(list, element));
    return result;
}
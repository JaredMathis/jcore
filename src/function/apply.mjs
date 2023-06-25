import { arguments_assert } from '../arguments/assert.mjs';
import { function_is } from './is.mjs';
import { defined_is } from '../defined/is.mjs';
import { list_is } from '../list/is.mjs';
export function function_apply(fn, object, args) {
    arguments_assert(arguments, [
        function_is,
        defined_is,
        list_is
    ]);
    fn.apply(object, args);
}
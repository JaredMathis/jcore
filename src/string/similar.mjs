import { true_is } from '../true/is.mjs';
import { string_is } from './is.mjs';
import { string_similar_remove_single } from './similar/remove/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_any } from '../list/any.mjs';
export function string_similar(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const fns = [string_similar_remove_single];
    for (let fn of fns) {
        let result = [
            fn(a, b),
            fn(b, a)
        ];
        if (list_any(result, true_is)) {
            return true;
        }
    }
    return false;
}
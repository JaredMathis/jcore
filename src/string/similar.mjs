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
    for (let f of fns) {
        let result = [
            f(a, b),
            f(b, a)
        ];
        if (list_any(result, true_is)) {
            return true;
        }
    }
    return false;
}
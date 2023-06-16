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
    let fn = string_similar_remove_single
    let result = [
        fn(a, b),
        fn(b, a)
    ];
    return list_any(result, true_is);
}
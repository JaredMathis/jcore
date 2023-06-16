import { string_is } from './is.mjs';
import { string_similar_directed } from './similar/directed.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_any } from '../list/any.mjs';
export function string_similar(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result = [string_similar_directed(a, b), string_similar_directed(b, a)]
    return list_any(result, true_is);
}
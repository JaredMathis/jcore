import { true_is } from '../true/is.mjs';
import { string_is } from './is.mjs';
import { string_similar_remove_single } from './similar/remove/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_any } from '../list/any.mjs';
import { list_single_item } from '../list/single/item.mjs';
export function string_similar(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let fn = string_similar_remove_single;
    for (let f of list_single_item(fn)) {
        let result = [
            fn(a, b),
            fn(b, a)
        ];
        return list_any(result, true_is);
    }
}
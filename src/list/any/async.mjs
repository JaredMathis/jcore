import { metadata } from '../../metadata.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function list_any_async(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    for (let a of list) {
        let v = await predicate(a);
        if (v) {
            return true;
        }
    }
    return false;
    metadata([]);
}
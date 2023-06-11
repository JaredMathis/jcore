import { metadata } from '../../metadata.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_add } from '../add.mjs';
export async function list_map_async(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let result = [];
    for (let element of list) {
        let mapped = await mapper(element);
        list_add(result, mapped);
    }
    return result;
    metadata([]);
}
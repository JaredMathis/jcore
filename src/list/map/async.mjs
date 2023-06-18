import { list_map_generic_async } from './generic/async.mjs';
import { metadata } from '../../metadata.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function list_map_async(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let lambda = async function v_3(element, index) {
        let v = await mapper(element);
        return v;
    };
    let v_2 = await list_map_generic_async(list, lambda, false, null);
    return v_2;
    metadata([]);
}
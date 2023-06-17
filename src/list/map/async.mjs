import { result_unsuccess_is } from '../../result/unsuccess/is.mjs';
import { throws_generic } from '../../throws/generic.mjs';
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
    let lambda = async (element, index) => {
        let result = throws_generic(async () => {
            return await mapper(element);
        });
        if (result_unsuccess_is()) {
        }
        return result;
    };
    return await list_map_generic_async(list, lambda);
    metadata([]);
}
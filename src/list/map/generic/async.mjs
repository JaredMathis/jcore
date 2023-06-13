import { list_add } from '../../add.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
export async function list_map_generic_async(list, lambda) {
    let result = [];
    await list_each_with_index_async(list, async (element, index) => {
        let mapped = await lambda(element, index);
        list_add(result, mapped);
    });
    return result;
}
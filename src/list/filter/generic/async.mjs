import { list_each_with_index_async } from '../../each/with/index/async.mjs';
import { list_adder_async } from '../../adder/async.mjs';
export async function list_filter_generic_async(array, filter, added_get) {
    let v = await list_adder_async(async function v_2(la) {
        await list_each_with_index_async(array, async function v_3(element, index) {
            if (await filter(element)) {
                let added = added_get(element, index);
                la(added);
            }
        });
    });
    return v;
}
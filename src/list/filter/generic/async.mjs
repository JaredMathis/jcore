import { metadata } from '../../../metadata.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
import { list_adder_async } from '../../adder/async.mjs';
export async function list_filter_generic_async(array, filter, added_get) {
    let v_5 = async function v_2(la) {
        let v_6 = async function v_3(element, index) {
            let v_4 = await filter(element);
            if (v_4) {
                let added = added_get(element, index);
                la(added);
            }
        };
        await list_each_with_index_async(array, v_6);
    };
    let v = await list_adder_async(v_5);
    return v;
    metadata([]);
}
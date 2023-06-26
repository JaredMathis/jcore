import { list_sort_string } from '../../../../../../list/sort/string.mjs';
import { js_visit_nodes_types_get } from '../../../../../../js/visit/nodes/types/get.mjs';
import { list_adder_unique_async } from '../../../../../../list/adder/unique/async.mjs';
export async function file_js_all_nodes_types_get_generic(lambda) {
    let v_2 = async function v(la) {
        let v_3 = async function mapper(args) {
            let {parsed} = args;
            let types = js_visit_nodes_types_get(parsed);
            for (let t of types) {
                la(t);
            }
        };
        await lambda(v_3);
    };
    let result = await list_adder_unique_async(v_2);
    list_sort_string(result);
    return result;
}
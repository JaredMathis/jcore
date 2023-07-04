import { result_property_data_get } from '../../../../../../../result/property/data/get.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { result_property_success_get } from '../../../../../../../result/property/success/get.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../list.mjs';
export function js_visit_stack_reversed_to_ancestor_list_assert(stack_reversed) {
    let r = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
    let v_2 = result_property_success_get(r);
    assert(v_2);
    let ancestor_list = result_property_data_get(r);
    return ancestor_list;
}
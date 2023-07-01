import { metadata } from '../../metadata.mjs';
import { list_adder_async } from '../adder/async.mjs';
import { list_each_with_index_async } from '../each/with/index/async.mjs';
import { result_property_data_get } from '../../result/property/data/get.mjs';
import { not } from '../../not.mjs';
import { occurs } from '../../occurs.mjs';
import { assert } from '../../assert.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { result_unsuccess_is } from '../../result/unsuccess/is.mjs';
import { throws_generic_async } from '../../throws/generic/async.mjs';
import { defined_is } from '../../defined/is.mjs';
import { boolean_is } from '../../boolean/is.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function list_map_generic(list, lambda, allow_error_mapping, value_on_error_mapping) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        defined_is
    ]);
    let v_10 = async function v_4(la) {
        let v_11 = async function v_5(element, index) {
            let v_12 = async function v_6() {
                let v_2 = await lambda(element, index);
                return v_2;
            };
            let result = await throws_generic_async(v_12);
            let mapped;
            let v_14 = function v_7(c) {
                if (allow_error_mapping) {
                    let v_9 = result_unsuccess_is(result);
                    if (v_9) {
                        mapped = value_on_error_mapping;
                        c();
                    }
                } else {
                    let v_3 = result_property_success_get(result);
                    assert(v_3);
                }
            };
            let v_13 = occurs(v_14);
            let v_8 = not(v_13);
            if (v_8) {
                mapped = result_property_data_get(result);
            }
            la(mapped);
        };
        await list_each_with_index_async(list, v_11);
    };
    let v = await list_adder_async(v_10);
    return v;
    metadata([]);
}
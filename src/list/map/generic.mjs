import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_adder } from '../adder.mjs';
import { list_each_with_index } from '../each/with/index.mjs';
import { result_property_data_get } from '../../result/property/data/get.mjs';
import { not } from '../../not.mjs';
import { occurs } from '../../occurs.mjs';
import { assert } from '../../assert.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { result_unsuccess_is } from '../../result/unsuccess/is.mjs';
import { throws_generic } from '../../throws/generic.mjs';
import { defined_is } from '../../defined/is.mjs';
import { boolean_is } from '../../boolean/is.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_map_generic(list, lambda, allow_error_mapping, value_on_error_mapping) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        defined_is
    ]);
    let v_10 = function v_4(la) {
        let v_11 = function v_5(element, index) {
            let v_12 = function v_6() {
                let v_2 = lambda(element, index);
                return v_2;
            };
            let result = throws_generic(v_12);
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
        list_each_with_index(list, v_11);
    };
    let v = list_adder(v_10);
    return v;
    metadata([metadata_generated()]);
}
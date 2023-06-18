import { result_property_data_get } from '../../result/property/data/get.mjs';
import { defined_is } from '../../defined/is.mjs';
import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { assert } from '../../assert.mjs';
import { result_unsuccess_is } from '../../result/unsuccess/is.mjs';
import { at_least_once } from '../../at/least/once.mjs';
import { not } from '../../not.mjs';
import { throws_generic } from '../../throws/generic.mjs';
import { list_each_with_index } from '../each/with/index.mjs';
import { list_adder } from '../adder.mjs';
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
    let v = list_adder(function v_4(la) {
        list_each_with_index(list, function v_5(element, index) {
            let result = throws_generic(function v_6() {
                let v_2 = lambda(element, index);
                return v_2;
            });
            let mapped;
            if (not(at_least_once(function v_7(c) {
                    if (allow_error_mapping) {
                        if (result_unsuccess_is(result)) {
                            mapped = value_on_error_mapping;
                            c();
                        }
                    } else {
                        let v_3 = result_property_success_get(result);
                        assert(v_3);
                    }
                }))) {
                mapped = result_property_data_get(result);
            }
            la(mapped);
        });
    });
    return v;
    metadata([metadata_generated()]);
}
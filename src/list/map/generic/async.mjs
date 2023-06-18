import { result_property_data_get } from '../../../result/property/data/get.mjs';
import { not } from '../../../not.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { result_property_success_get } from '../../../result/property/success/get.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
import { result_unsuccess_is } from '../../../result/unsuccess/is.mjs';
import { throws_generic } from '../../../throws/generic.mjs';
import { list_adder_async } from '../../adder/async.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
import { list_is } from '../../is.mjs';
import { function_is } from '../../../function/is.mjs';
import { assert } from '../../../assert.mjs';
import { changed } from '../../../changed.mjs';
export async function list_map_generic_async(list, lambda, allow_error_mapping, value_on_error_mapping) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        defined_is
    ]);
    let v = await list_adder_async(async function v_4(la) {
        await list_each_with_index_async(list, async function v_5(element, index) {
            let result = throws_generic(async function v_6() {
                let v_2 = await lambda(element, index);
                return v_2;
            });
            let mapped;
            if (not(changed(function v_7(c) {
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
            la(result, mapped);
        });
    });
    return v;
}
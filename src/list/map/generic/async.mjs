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
    return await list_adder_async(async la => {
        await list_each_with_index_async(list, async (element, index) => {
            let result = throws_generic(async () => {
                return await lambda(element, index);
            });
            let mapped;
            if (not(changed(c => {
                    if (allow_error_mapping) {
                        if (result_unsuccess_is(result)) {
                            mapped = value_on_error_mapping;
                            c();
                        }
                    } else {
                        assert(result_property_success_get(result));
                    }
                }))) {
                mapped = result_property_data_get1(result);
            }
            la(result, mapped);
        });
    });
}
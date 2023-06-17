import { result_property_success_get } from '../../../result/property/success/get.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
import { result_unsuccess_is } from '../../../result/unsuccess/is.mjs';
import { throws_generic } from '../../../throws/generic.mjs';
import { list_adder_async } from '../../adder/async.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
import { list_is } from '../../is.mjs';
import { function_is } from '../../../function/is.mjs';
import { not } from '../../../not.mjs';
import { assert } from '../../../assert.mjs';
export async function list_map_generic_async(list, lambda, allow_error_mapping) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is
    ]);
    return await list_adder_async(async la => {
        await list_each_with_index_async(list, async (element, index) => {
            let result = throws_generic(async () => {
                return await lambda(element, index);
            });
            if (not(allow_error_mapping)) {
                assert(result_property_success_get(result));
            } else {
                if (result_unsuccess_is(result)) {
                }
            }
            let mapped = result_property_data_get(result);
            la(result, mapped);
        });
    });
}
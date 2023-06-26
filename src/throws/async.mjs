import { result_property_success_get } from '../result/property/success/get.mjs';
import { not } from '../not.mjs';
import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { throws_generic_async } from './generic/async.mjs';
export async function throws_async(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = await throws_generic_async(lambda);
    let v = result_property_success_get(result);
    let errored = not(v);
    return errored;
    metadata([]);
}
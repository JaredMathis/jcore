import { result_property_success_get } from './result/property/success/get.mjs';
import { result_unsuccess } from './result/unsuccess.mjs';
import { result_empty } from './result/empty.mjs';
import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { not } from './not.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = result_empty();
    let lambda_result;
    try {
        lambda_result = lambda();
    } catch (e) {
        result_unsuccess(result);
    }
    let errored = not(result_property_success_get(result));
    return errored;
    metadata([metadata_generated()]);
}
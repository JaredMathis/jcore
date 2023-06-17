import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { result_data_set } from '../result/data/set.mjs';
import { result_unsuccess } from '../result/unsuccess.mjs';
import { result_empty } from '../result/empty.mjs';
import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function throws_generic(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = result_empty();
    let lambda_result;
    try {
        lambda_result = lambda();
    } catch (e) {
        result_unsuccess(result);
    }
    result_data_set(result, lambda_result);
    return result;
    metadata([metadata_generated()]);
}
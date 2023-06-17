import { result_data_set } from '../../result/data/set.mjs';
import { result_unsuccess } from '../../result/unsuccess.mjs';
import { result_empty } from '../../result/empty.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_is } from '../../function/is.mjs';
export async function throws_generic_async(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = result_empty();
    let lambda_result;
    try {
        lambda_result = await lambda();
    } catch (e) {
        result_unsuccess(result);
    }
    result_data_set(result, lambda_result);
    return result;
}
import { result_data_set } from '../result/data/set.mjs';
import { result_unsuccess } from '../result/unsuccess.mjs';
import { result_empty } from '../result/empty.mjs';
export function throws_generic(lambda) {
    let result = result_empty();
    let lambda_result;
    try {
        lambda_result = lambda();
    } catch (e) {
        result_unsuccess(result);
    }
    result_data_set(result, lambda_result);
    return result;
}
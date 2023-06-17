import { result_data_set } from '../../result/data/set.mjs';
import { result_unsuccess } from '../../result/unsuccess.mjs';
import { result_empty } from '../../result/empty.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function throws_generic_async(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
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
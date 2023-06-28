import { function_is } from '../../../../function/is.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { boolean_value_false } from '../../../../boolean/value/false.mjs';
import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { metadata } from '../../../../metadata.mjs';
import { true_is } from '../../../../true/is.mjs';
import { list_any } from '../../../any.mjs';
export function list_each_function_results_any(fns, results_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    for (let fn of fns) {
        let results = results_get(fn);
        let v = list_any(results, true_is);
        if (v) {
            let v_2 = boolean_value_true();
            return v_2;
        }
    }
    let v_3 = boolean_value_false();
    return v_3;
    metadata([]);
}
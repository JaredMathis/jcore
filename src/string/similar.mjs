import { boolean_value_false } from '../boolean/value/false.mjs';
import { boolean_value_true } from '../boolean/value/true.mjs';
import { metadata } from '../metadata.mjs';
import { string_equal_except_1 } from './equal/except/1.mjs';
import { list_each_function_results_any } from '../list/each/function/results/any.mjs';
import { list_multiple_combine } from '../list/multiple/combine.mjs';
import { string_similar_swap_adjascent } from './similar/swap/adjascent.mjs';
import { string_is } from './is.mjs';
import { string_similar_remove_single } from './similar/remove/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function string_similar(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const fns_commutative = [string_similar_remove_single];
    let v_2 = list_each_function_results_any(fns_commutative, results_commutative_get);
    if (v_2) {
        let v_4 = boolean_value_true();
        return v_4;
    }
    const fns = [
        string_similar_swap_adjascent,
        string_equal_except_1
    ];
    let v_3 = list_each_function_results_any(fns, results_get);
    if (v_3) {
        let v_5 = boolean_value_true();
        return v_5;
    }
    let v_6 = boolean_value_false();
    return v_6;
    function results_commutative_get(fn) {
        let v_7 = [
            results_get(fn),
            [fn(b, a)]
        ];
        let v = list_multiple_combine(v_7);
        return v;
    }
    function results_get(fn) {
        let v_8 = fn(a, b);
        return [v_8];
    }
    metadata([]);
}
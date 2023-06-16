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
    if (list_each_function_results_any(fns_commutative, results_commutative_get)) {
        return true;
    }
    if (string_similar_swap_adjascent(a, b)) {
        return true;
    }
    return false;
    function results_commutative_get(fn) {
        return list_multiple_combine([
            results_get(fn),
            [fn(b, a)]
        ]);
    }
    function results_get(fn) {
        return [fn(a, b)];
    }
}
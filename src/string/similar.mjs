import { string_similar_swap_adjascent } from './similar/swap/adjascent.mjs';
import { true_is } from '../true/is.mjs';
import { string_is } from './is.mjs';
import { string_similar_remove_single } from './similar/remove/single.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_any } from '../list/any.mjs';
export function string_similar(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const fns_commutative = [string_similar_remove_single];
    if (list_each_function_results_any(fns_commutative, results_get)) {
        return true;
    }

    if (string_similar_swap_adjascent(a, b)) {
        return true;
    }
    return false;
    function results_get(fn) {
        return [
            fn(a, b),
            fn(b, a)
        ];
    }
}

function list_each_function_results_any(fns, results_get) {
    for (let fn of fns) {
        let results = results_get(fn);
        if (list_any(results, true_is)) {
            return true;
        }
    }
    return false;
}
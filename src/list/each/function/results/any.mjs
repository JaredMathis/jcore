import { boolean_value_false } from '../../../../boolean/value/false.mjs';
import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { metadata } from '../../../../metadata.mjs';
import { true_is } from '../../../../true/is.mjs';
import { list_any } from '../../../any.mjs';
export function list_each_function_results_any(fns, results_get) {
    for (let fn of fns) {
        let results = results_get(fn);
        let v = list_any(results, true_is);
        if (v) {
            return boolean_value_true();
        }
    }
    return boolean_value_false();
    metadata([]);
}
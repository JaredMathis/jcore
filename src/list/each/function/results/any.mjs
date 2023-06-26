import { metadata } from '../../../../metadata.mjs';
import { true_is } from '../../../../true/is.mjs';
import { list_any } from '../../../any.mjs';
export function list_each_function_results_any(fns, results_get) {
    for (let fn of fns) {
        let results = results_get(fn);
        let v = list_any(results, true_is);
        if (v) {
            return true;
        }
    }
    return false;
    metadata([]);
}
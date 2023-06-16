import { true_is } from '../../../../true/is.mjs';
import { list_any } from '../../../any.mjs';
export function list_each_function_results_any(fns, results_get) {
    for (let fn of fns) {
        let results = results_get(fn);
        if (list_any(results, true_is)) {
            return true;
        }
    }
    return false;
}
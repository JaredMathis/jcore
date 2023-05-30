import { list_add } from '../../list/add.mjs';
import { object_each } from '../each.mjs';
export function object_each_filter(object, predicate) {
    let result = [];
    let lambda = (value, key) => {
        if (predicate(value, key)) {
            list_add(result, key);
        }
    };
    object_each(object, lambda);
    return result;
}
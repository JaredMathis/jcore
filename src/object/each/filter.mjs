import {object_each} from '../each.mjs';
export function object_each_filter(object, predicate) {
    let result = [];
    let lambda = (value, key) => {
        if (predicate(value)) {
            array_add(result, value);
        }
    }
    object_each(object, lambda);
    return result;
}
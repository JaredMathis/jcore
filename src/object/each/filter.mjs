import { array_add } from '../../array/add.mjs';
import {object_each} from '../each.mjs';
export function object_each_filter(object, predicate) {
    let result = [];
    let lambda = (value, key) => {
        if (predicate(value, key)) {
            array_add(result, value);
        }
    }
    object_each(object, lambda);
    return result;
}
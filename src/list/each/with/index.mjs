import { list_get } from '../../get.mjs';
import { range } from '../../../range.mjs';
export function list_each_with_index(args, lambda) {
    for (let index of range(args)) {
        let element = list_get(index);
        lambda(element, index);
    }
}
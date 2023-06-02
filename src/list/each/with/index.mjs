import { list_get } from '../../get.mjs';
import { range } from '../../../range.mjs';
export function list_each_with_index(args, lambda) {
    const r = range(args);
    console.log(r)
    for (let index of r) {
        let element = list_get(index);
        lambda(element, index);
    }
}
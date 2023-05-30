import { list_add } from '../add.mjs';
export async function list_filter_async(array, filter) {
    let result = [];
    for (let a of array) {
        if (await filter(a)) {
            list_add(result, a);
        }
    }
    return result;
}
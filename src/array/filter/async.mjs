import {array_add} from '../add.mjs'

export async function array_filter_async(array, filter) {
    let result = [];
    for (let a of array) {
        if (await filter(a)) {
            array_add(result, a);
        }
    }
    return result;
}
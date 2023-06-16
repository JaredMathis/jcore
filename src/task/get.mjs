import { list_find_property } from '../list/find/property.mjs';
import { task_property_number } from './property/number.mjs';
import { task_all } from './all.mjs';
import { integer_parse } from '../integer/parse.mjs';
export async function task_get(task_number_string) {
    let task_number = integer_parse(task_number_string);
    let all = await task_all();
    const property_name = task_property_number();
    let result = list_find_property(all, property_name, task_number);
    return result;
}
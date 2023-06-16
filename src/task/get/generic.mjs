import { task_property_number } from '../property/number.mjs';
import { task_all_unsummarized } from '../all/unsummarized.mjs';
import { integer_parse } from '../../integer/parse.mjs';
export async function task_get_generic(task_number_string, lambda) {
    let task_number = integer_parse(task_number_string);
    let all = await task_all_unsummarized();
    const property_name = task_property_number();
    let result = lambda(all, property_name, task_number);
    return result;
}
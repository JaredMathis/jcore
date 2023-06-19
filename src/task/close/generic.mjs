import { task_property_closed } from '../property/closed.mjs';
export async function task_close_generic(lambda, task_number_string) {
    const property_value = task_property_closed();
    let v = await lambda(task_number_string, property_value);
    return v;
}
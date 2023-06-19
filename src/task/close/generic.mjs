import { task_state_change } from '../state/change.mjs';
import { task_property_closed } from '../property/closed.mjs';
export async function task_close_generic(task_number_string) {
    const property_value = task_property_closed();
    let v = await task_state_change(task_number_string, property_value);
    return v;
}
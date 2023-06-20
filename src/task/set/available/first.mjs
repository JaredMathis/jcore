import { task_set } from '../../set.mjs';
import { task_available_first } from '../../available/first.mjs';
export async function task_set_available_first() {
    let available = await task_available_first();
    task_set(available);
}
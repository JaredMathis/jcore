import { metadata } from '../../metadata.mjs';
import { data_task_id_set_hash } from './id/set/hash.mjs';
import { data_task_finish } from './finish.mjs';
export async function data_task_next(task_id) {
    await data_task_finish();
    await data_task_id_set_hash(task_id);
    metadata([]);
}
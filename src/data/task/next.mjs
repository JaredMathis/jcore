import { log } from '../../log.mjs';
import { data_task_id_set_hash } from './id/set/hash.mjs';
import { data_task_finish } from './finish.mjs';
import { data_get } from '../get.mjs';
export async function data_task_next(task_id) {
    await data_task_finish();
    console.log(await data_get());
    await data_task_id_set_hash(task_id);
}
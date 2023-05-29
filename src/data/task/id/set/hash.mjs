import { data_task_id_set } from "../set.mjs";

export async function data_task_id_set_hash(data_id) {
    let hashed = '#' + data_id;
    await data_task_id_set(hashed);
}
import { data_task_finish } from "./finish.mjs";

export async function data_task_next(task_id) {
    await data_task_finish();
}
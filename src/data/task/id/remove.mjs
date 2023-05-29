export async function data_task_id_remove() {
    let data = await data_get();
    return object_property_get(data, data_task_id());
}
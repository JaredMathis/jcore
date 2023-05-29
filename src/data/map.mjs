import { data_get } from "./get.mjs";

export async function data_map(map) {
    let data = await data_get();
    map(data);
    await data_overwrite(data);
}
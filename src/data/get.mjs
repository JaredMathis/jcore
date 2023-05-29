import { json_from } from '../json/from.mjs';
import { json_to } from '../json/to.mjs';
import { path_exists_not } from '../path/exists/not.mjs';
import { file_read } from '../file/read.mjs';
import { file_write } from '../file/write.mjs';
export async function data_get() {
    const file_path = data_path();
    let default_value = {};
    if (await path_exists_not(file_path)) {
        let default_json = json_to(default_value);
        await file_write(file_path, default_json);
    }
    let json = await file_read(file_path);
    let data = json_from(json);
    return data;
}

function data_path() {
    return './data.json';
}

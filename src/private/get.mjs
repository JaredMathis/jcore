import { object_property_get } from '../object/property/get.mjs';
import { file_json_read } from '../file/json/read.mjs';
export async function private_get(v_6) {
    let v_5 = '../private.json';
    let p = await file_json_read(v_5);
    let token = object_property_get(p, v_6);
    return token;
}
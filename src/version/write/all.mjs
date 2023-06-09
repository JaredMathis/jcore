import { file_delete } from '../../file/delete.mjs';
import { file_json_overwrite } from '../../file/json/overwrite.mjs';
import { file_exists } from '../../file/exists.mjs';
import { assert } from '../../assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { version_property_contents } from '../property/contents.mjs';
import { version_property_file_path } from '../property/file/path.mjs';
export async function version_write_all(writes) {
    let property_file_path = version_property_file_path();
    let property_contents = version_property_contents();
    for (let w of writes) {
        const file_path = object_property_get(w, property_file_path);
        assert(!await file_exists(file_path));
    }
    try {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            const contents = object_property_get(w, property_contents);
            await file_json_overwrite(file_path, contents);
        }
    } catch (e) {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            if (await file_exists(file_path)) {
                await file_delete(file_path);
            }
        }
        throw e;
    }
}
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { try_catch_throw } from '../../try/catch/throw.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_delete } from '../../file/delete.mjs';
import { file_json_overwrite } from '../../file/json/overwrite.mjs';
import { file_exists } from '../../file/exists.mjs';
import { assert } from '../../assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { version_property_contents } from '../property/contents.mjs';
import { version_property_file_path } from '../property/file/path.mjs';
export async function version_write_all(writes) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let property_file_path = version_property_file_path();
    let property_contents = version_property_contents();
    for (let w of writes) {
        const file_path = object_property_get(w, property_file_path);
        let v_2 = await file_exists(file_path);
        let v = not(v_2);
        assert(v);
    }
    let v_4 = async function lambda_try() {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            const contents = object_property_get(w, property_contents);
            await file_json_overwrite(file_path, contents);
        }
    };
    let v_5 = async function lambda_catch(e) {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            let v_3 = await file_exists(file_path);
            if (v_3) {
                await file_delete(file_path);
            }
        }
    };
    await try_catch_throw(v_4, v_5);
    metadata([]);
}
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { json_to } from '../../json/to.mjs';
import { file_overwrite } from '../overwrite.mjs';
import { object_is } from '../../object/is.mjs';
export async function file_json_overwrite(file_path, data) {
    arguments_assert(arguments, [
        object_is,
        path_is
    ]);
    let json = json_to(data);
    await file_overwrite(file_path, json);
    metadata([]);
}
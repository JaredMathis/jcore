import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_rename } from '../../../js/identifier/rename.mjs';
import { file_js_map_args } from '../map/args.mjs';
export async function file_js_identifier_rename(file_path, identifier_name_old, identifier_name_new) {
    arguments_assert(arguments, [
        path_is,
        js_identifier_is,
        js_identifier_is
    ]);
    let v_3 = function v(args) {
        let v_2 = js_identifier_rename(args, identifier_name_old, identifier_name_new);
        return v_2;
    };
    await file_js_map_args(file_path, v_3);
    metadata([]);
}
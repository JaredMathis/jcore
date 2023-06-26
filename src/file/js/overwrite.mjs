import { file_overwrite_if_changed } from '../overwrite/if/changed.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { defined_is } from '../../defined/is.mjs';
export async function file_js_overwrite(args) {
    arguments_assert(arguments, [defined_is]);
    let v = 'file_path';
    let file_path = object_property_get(args, v);
    let v_2 = 'parsed';
    let parsed = object_property_get(args, v_2);
    let v_3 = 'unparsed';
    let unparsed_old = object_property_get(args, v_3);
    let unparsed_new = js_unparse(parsed);
    await file_overwrite_if_changed(file_path, unparsed_new, unparsed_old);
    metadata([]);
}
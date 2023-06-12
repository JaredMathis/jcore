import { file_overwrite_if_changed } from '../overwrite/if/changed.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_overwrite } from '../overwrite.mjs';
import { defined_is } from '../../defined/is.mjs';
export async function file_js_overwrite(args) {
    arguments_assert(arguments, [defined_is]);
    let file_path = object_property_get(args, 'file_path');
    let parsed = object_property_get(args, 'parsed');
    let unparsed_old = object_property_get(args, 'unparsed');
    let unparsed_new = js_unparse(parsed);
    if (false) {
        file_overwrite_if_changed;
    }
    await file_overwrite(file_path, unparsed_new);
    metadata([]);
}
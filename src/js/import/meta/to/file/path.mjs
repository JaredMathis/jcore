import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { fileURLToPath } from 'url';
import { defined_is } from '../../../../../defined/is.mjs';
export function js_import_meta_to_file_path(import_meta) {
    arguments_assert(arguments, [defined_is]);
    let v = fileURLToPath(import_meta.url);
    return v;
}
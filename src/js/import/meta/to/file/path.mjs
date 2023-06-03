import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { fileURLToPath } from 'url';
export function js_import_meta_to_file_path(import_meta) {
    arguments_assert(arguments, [tautology]);
    return fileURLToPath(import_meta.url);
}
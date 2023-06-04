import { path_is } from '../../path/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_write } from '../write.mjs';
import { js_unparse } from '../../js/unparse.mjs';
export async function file_js_write(function_path, parsed) {
    arguments_assert(arguments, [
        path_is,
        defined_is
    ]);
    let unparsed = js_unparse(parsed);
    await file_write(function_path, unparsed);
    metadata([]);
}
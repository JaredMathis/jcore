import { version_file_difference_generic } from './difference/generic.mjs';
import { file_read } from '../../file/read.mjs';
import { path_is } from '../../path/is.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function version_file_difference(repository_name, file_path) {
    arguments_assert(arguments, [
        js_identifier_is,
        path_is
    ]);
    let v = await version_file_difference_generic(repository_name, file_path, file_read);
    return v;
    metadata([]);
}
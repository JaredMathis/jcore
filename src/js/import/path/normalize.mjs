import { path_is } from '../../../path/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { directory_current } from '../../../directory/current.mjs';
import { directory_separator } from '../../../directory/separator.mjs';
import { string_replace } from '../../../string/replace.mjs';
import { string_starts_with } from '../../../string/starts/with.mjs';
import { js_directory_separator } from '../../directory/separator.mjs';
comment(`path.normalize slashes one way. However import statements in mjs require slashes another way. This function makes imports suitable for import usage in mjs.`);
export function js_import_path_normalize(import_path) {
    arguments_assert(arguments, [path_is]);
    let result = string_replace(import_path, directory_separator(), js_directory_separator());
    if (not(string_starts_with(result, directory_current()))) {
        return `${ directory_current() }${ js_directory_separator() }` + result;
    }
    return result;
    metadata([]);
}
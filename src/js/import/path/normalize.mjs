import { path_separator_change } from '../../../path/separator/change.mjs';
import { not } from '../../../not.mjs';
import { path_is } from '../../../path/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { directory_current } from '../../../directory/current.mjs';
import { string_starts_with } from '../../../string/starts/with.mjs';
import { js_directory_separator } from '../../directory/separator.mjs';
comment(`path.normalize slashes one way. However import statements in mjs require slashes another way. This function makes imports suitable for import usage in mjs.`);
export function js_import_path_normalize(import_path) {
    arguments_assert(arguments, [path_is]);
    let result = path_separator_change(import_path);
    let v_5 = directory_current();
    let v_4 = string_starts_with(result, v_5);
    let v_3 = not(v_4);
    if (v_3) {
        let v_6 = directory_current();
        let v_7 = js_directory_separator();
        return `${ v_6 }${ v_7 }${ result }`;
    }
    return result;
    metadata([]);
}
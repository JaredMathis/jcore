import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { directory_separator } from '../../directory/separator.mjs';
import { string_split } from '../../string/split.mjs';
import { path_is } from '../../path/is.mjs';
export function file_path_split(file_path) {
    arguments_assert(arguments, [path_is]);
    let ds = directory_separator();
    let v = string_split(file_path, ds);
    return v;
    metadata([]);
}
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { directory_separator } from '../../directory/separator.mjs';
import { string_split } from '../../string/split.mjs';
export function file_path_split(file_path) {
    arguments_assert(arguments, [tautology]);
    let ds = directory_separator();
    return string_split(file_path, ds);
    metadata([]);
}
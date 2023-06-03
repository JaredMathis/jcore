import { path_is } from '../is.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { comment } from '../../comment.mjs';
import { path_parent } from '../parent.mjs';
import { path_relative } from '../relative.mjs';
comment(`For some reason ${ function_name_get(path_relative) } does not seem to work when the two paths are both files. This fixes it. At least for the purposes of determining a JavaScript import path`);
export function path_relative_file(file_path, function_path) {
    arguments_assert(arguments, [
        path_is,
        tautology
    ]);
    let file_path_directory = path_parent(file_path);
    let relative = path_relative(file_path_directory, function_path);
    return relative;
    metadata([]);
}
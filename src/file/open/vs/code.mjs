import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { command_line } from '../../../command/line.mjs';
import { path_is } from '../../../path/is.mjs';
export async function file_open_vs_code(function_path) {
    arguments_assert(arguments, [path_is]);
    let v = `code ${ function_path }`;
    await command_line(v);
    metadata([]);
}
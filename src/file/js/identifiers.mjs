import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_identifiers } from '../../js/identifiers.mjs';
import { file_js_parse } from './parse.mjs';
export async function file_js_identifiers(file_path) {
    arguments_assert(arguments, [path_is]);
    let parsed = await file_js_parse(file_path);
    let v = js_identifiers(parsed);
    return v;
    metadata([]);
}
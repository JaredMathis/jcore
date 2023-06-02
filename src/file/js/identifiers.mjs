import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_find_identifiers } from '../../js/find/identifiers.mjs';
import { file_js_parse } from './parse.mjs';
export async function file_js_identifiers(file_path) {
    arguments_assert(arguments, [tautology]);
    let parsed = await file_js_parse(file_path);
    return js_find_identifiers(parsed);
    metadata([]);
}
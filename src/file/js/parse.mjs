import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_parse } from '../../js/parse.mjs';
import { file_read } from '../read.mjs';
export async function file_js_parse(file_path) {
    arguments_assert(arguments, [tautology]);
    let unparsed = await file_read(file_path);
    return js_parse(unparsed);
    metadata([]);
}
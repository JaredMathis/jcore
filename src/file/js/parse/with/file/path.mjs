import { metadata } from '../../../../../metadata.mjs';
import { js_parse } from '../../../../../js/parse.mjs';
import { file_read } from '../../../../read.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function file_js_parse_with_file_path(file_path) {
    arguments_assert(arguments, [tautology]);
    let unparsed = await file_read(file_path);
    let parsed = js_parse(unparsed);
    return {
        unparsed,
        parsed
    };
    metadata([]);
}
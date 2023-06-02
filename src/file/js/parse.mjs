import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_parse } from '../../js/parse.mjs';
import { file_read } from '../read.mjs';
import { js_node_is } from '../../js/node/is.mjs';
export async function file_js_parse(file_path) {
    arguments_assert(arguments, [tautology]);
    let {parsed} = await file_js_parse_with_file_path(file_path);
    assert(js_node_is(parsed));
    return parsed;
    metadata([]);
}


export async function file_js_parse_with_file_path(file_path) {
    arguments_assert(arguments, [tautology]);
    let unparsed = await file_read(file_path);
    let parsed = js_parse(unparsed);
    return {
        unparsed,
        parsed
    }
    metadata([]);
}
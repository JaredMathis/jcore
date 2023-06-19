import { path_is } from '../../path/is.mjs';
import { file_js_parse_with_unparsed } from './parse/with/unparsed.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_is } from '../../js/node/is.mjs';
import { assert } from '../../assert.mjs';
import { log } from '../../log.mjs';
export async function file_js_parse(file_path) {
    arguments_assert(arguments, [path_is]);
    log('beforee')
    let {parsed} = await file_js_parse_with_unparsed(file_path);
    let v = js_node_is(parsed);
    assert(v);
    log('after')
    return parsed;
    metadata([]);
}
import { path_is } from '../../path/is.mjs';
import { file_js_parse_with_file_path } from './parse/with/file/path.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_is } from '../../js/node/is.mjs';
import { assert } from '../../assert.mjs';
export async function file_js_parse(file_path) {
    arguments_assert(arguments, [path_is]);
    let {parsed} = await file_js_parse_with_file_path(file_path);
    assert(js_node_is(parsed));
    return parsed;
    metadata([]);
}
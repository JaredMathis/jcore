import { log } from '../../../../log.mjs';
import { path_is } from '../../../../path/is.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_parse } from '../../../../js/parse.mjs';
import { file_read } from '../../../read.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function file_js_parse_with_unparsed(file_path) {
    arguments_assert(arguments, [path_is]);
    let unparsed = await file_read(file_path);
    log('before');
    let parsed = js_parse(unparsed);
    log('after');
    return {
        unparsed,
        parsed
    };
    metadata([]);
}
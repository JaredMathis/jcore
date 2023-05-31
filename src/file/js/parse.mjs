import { metadata } from '../../metadata.mjs';
import { js_parse } from '../../js/parse.mjs';
import { file_read } from '../read.mjs';
export async function file_js_parse(file_path) {
    let unparsed = await file_read(file_path);
    return js_parse(unparsed);
    metadata([]);
}
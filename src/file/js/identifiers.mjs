import { js_identifiers } from '../../js/identifiers.mjs';
import { file_js_parse } from './parse.mjs';
export async function file_js_identifiers(file_path) {
    let parsed = await file_js_parse(file_path);
    return js_identifiers(parsed);
}
import { js_identifiers } from '../../../../js/identifiers.mjs';
import { file_js_parse } from '../../parse.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_identifiers_each(lambda) {
    let all = await file_js_all_path();
    for (let file_path of all) {
        let parsed = await file_js_parse(file_path);
        let identifiers = js_identifiers(parsed);
        lambda(identifiers, file_path);
    }
}
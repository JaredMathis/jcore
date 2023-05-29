import { array_add_if_not_exists } from '../../../../array/add/if/not/exists.mjs';
import { array_contains } from '../../../../array/contains.mjs';
import { js_identifier_all } from '../../../../js/identifier/all.mjs';
import { file_js_parse } from '../../parse.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_identifier_exists(identifier_name) {
    let all = await file_js_all_path();
    let result = [];
    for (let a of all) {
        let parsed = await file_js_parse(a);
        let identifiers = js_identifier_all(parsed);
        for (let i of identifiers) {
            array_add_if_not_exists(result, i);
        }
    }
    return array_contains(result, identifier_name);
}
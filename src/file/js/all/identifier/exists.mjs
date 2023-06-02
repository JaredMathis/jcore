import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_if_not_exists } from '../../../../list/add/if/not/exists.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { js_identifiers } from '../../../../js/identifiers.mjs';
import { file_js_parse } from '../../parse.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_identifier_exists(identifier_name) {
    arguments_assert(arguments, [tautology]);
    let all = await file_js_all_path();
    let result = [];
    for (let a of all) {
        let parsed = await file_js_parse(a);
        let identifiers = js_identifiers(parsed);
        for (let i of identifiers) {
            list_add_if_not_exists(result, i);
        }
    }
    return list_contains(result, identifier_name);
    metadata([]);
}
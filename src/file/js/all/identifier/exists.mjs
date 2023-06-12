import { file_js_all_identifiers_each } from '../identifiers/each.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_if_not_exists } from '../../../../list/add/if/not/exists.mjs';
import { list_contains } from '../../../../list/contains.mjs';
export async function file_js_all_identifier_exists(identifier_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = [];
    await file_js_all_identifiers_each(lambda);
    return list_contains(result, identifier_name);
    metadata([]);
    function lambda(identifiers) {
        for (let i of identifiers) {
            list_add_if_not_exists(result, i);
        }
    }
}
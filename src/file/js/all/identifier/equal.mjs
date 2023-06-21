import { metadata } from '../../../../metadata.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_add_if_not_exists } from '../../../../list/add/if/not/exists.mjs';
import { file_js_all_identifiers_each } from '../identifiers/each.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function file_js_all_identifier_equal(identifier_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = [];
    await file_js_all_identifiers_each(function lambda(identifiers, file_path) {
        if (list_contains(identifiers, identifier_name)) {
            list_add_if_not_exists(result, file_path);
        }
    });
    return result;
    metadata([]);
}
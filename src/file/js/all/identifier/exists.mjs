import { file_js_all_identifiers_each } from '../identifiers/each.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_adder_unique_async } from '../../../../list/adder/unique/async.mjs';
export async function file_js_all_identifier_exists(identifier_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = list_adder_unique_async(async la => {
        await file_js_all_identifiers_each(function lambda(identifiers) {
            for (let i of identifiers) {
                la(result, i);
            }
        });
    });
    return list_contains(result, identifier_name);
    metadata([]);
}
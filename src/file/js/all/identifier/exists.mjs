import { file_js_all_identifiers_each } from '../identifiers/each.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_adder_unique_async } from '../../../../list/adder/unique/async.mjs';
export async function file_js_all_identifier_exists(identifier_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v_3 = async function v_2(la) {
        let v_4 = function lambda(identifiers) {
            for (let i of identifiers) {
                la(i);
            }
        };
        await file_js_all_identifiers_each(v_4);
    };
    let result = await list_adder_unique_async(v_3);
    let v = list_contains(result, identifier_name);
    return v;
    metadata([]);
}
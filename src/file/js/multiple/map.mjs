import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { assert } from '../../../assert.mjs';
import { list_is } from '../../../list/is.mjs';
import { file_js_map } from '../map.mjs';
export async function file_js_multiple_map(function_name_mapper, multiple) {
    arguments_assert(arguments, [
        string_identifier_is,
        tautology
    ]);
    assert(list_is(multiple));
    for (let m of multiple) {
        await file_js_map(function_name_mapper, m);
    }
    metadata([]);
}
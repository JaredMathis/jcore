import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_is } from '../../../list/is.mjs';
import { file_js_map } from '../map.mjs';
export async function file_js_multiple_map(function_name_mapper, multiple) {
    arguments_assert(arguments, [
        js_identifier_is,
        list_is
    ]);
    for (let m of multiple) {
        await file_js_map(function_name_mapper, m);
    }
    metadata([]);
}
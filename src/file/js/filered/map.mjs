import { function_is } from '../../../function/is.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_multiple_map } from '../multiple/map.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { file_js_all_path } from '../all/path.mjs';
export async function file_js_filered_map(function_name_mapper, filter) {
    arguments_assert(arguments, [
        js_identifier_is,
        function_is
    ]);
    let all = await file_js_all_path();
    let filtered = list_filter(all, filter);
    await file_js_multiple_map(function_name_mapper, filtered);
    metadata([]);
}
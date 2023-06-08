import { directory_current_to_source } from '../../../directory/current/to/source.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { string_ends_with } from '../../../string/ends/with.mjs';
import { function_extension } from '../../../function/extension.mjs';
export async function file_js_all_path() {
    arguments_assert(arguments, []);
    let result = await directory_read(directory_current_to_source());
    let filtered = list_filter(result, a => string_ends_with(a, function_extension()));
    return filtered;
    metadata([]);
}
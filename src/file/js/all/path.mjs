import { metadata } from '../../../metadata.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { string_ends_with } from '../../../string/ends/with.mjs';
import { directory_separator } from '../../../directory/separator.mjs';
import { function_extension } from '../../../function/extension.mjs';
import { directory_source } from '../../../directory/source.mjs';
import { directory_current } from '../../../directory/current.mjs';
export async function file_js_all_path() {
    let directory_source_result = directory_source();
    let result = await directory_read(`${ directory_current() }${ directory_separator() }${ directory_source_result }`);
    let filtered = list_filter(result, a => string_ends_with(a, function_extension()));
    return filtered;
    metadata([]);
}
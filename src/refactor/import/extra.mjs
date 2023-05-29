import { error } from '../../error.mjs';
import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
export async function refactor_import_extra(parsed) {
    let import_name_all = js_import_all_to_function_name(parsed);
    let counts = js_identifier_counts(parsed);
    console.log({import_name_all,counts})
    error();
}
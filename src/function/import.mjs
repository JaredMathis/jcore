import { not } from '../not.mjs';
import { log_multiple } from '../log/multiple.mjs';
import { function_name_list_to_file_path } from './name/list/to/file/path.mjs';
import { string_similar } from '../string/similar.mjs';
import { function_name_all } from './name/all.mjs';
import { try_catch_throw_async } from '../try/catch/throw/async.mjs';
import { defined_is } from '../defined/is.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_import_path_normalize } from '../js/import/path/normalize.mjs';
import { path_relative_file } from '../path/relative/file.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
import { js_import_meta_to_file_path } from '../js/import/meta/to/file/path.mjs';
import { list_filter } from '../list/filter.mjs';
import { list_empty } from '../list/empty.mjs';
export async function function_import(import_meta, function_name) {
    arguments_assert(arguments, [
        defined_is,
        string_identifier_is
    ]);
    const __filename = js_import_meta_to_file_path(import_meta);
    let function_path = function_name_to_file_path(function_name);
    let concated = path_relative_file(__filename, function_path);
    let replaced = js_import_path_normalize(concated);
    let imported = await try_catch_throw_async(async () => await import(replaced), async e => {
        let all = await function_name_all();
        let similar = list_filter(all, a => string_similar(a, function_name));
        if (not(list_empty(similar))) {
            let similar_paths = function_name_list_to_file_path(similar);
            log_multiple([
                `Did you mean: `,
                similar_paths
            ]);
        }
    });
    return imported;
}
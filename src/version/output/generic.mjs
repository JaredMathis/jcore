import { version_file_contents_each } from '../file/contents/each.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { git_ignore_filter } from '../../git/ignore/filter.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../../list/is.mjs';
export async function version_output_generic(repository_name, file_paths, lambda) {
    arguments_assert(arguments, [
        js_identifier_is,
        list_is,
        function_is
    ]);
    let filtered = await git_ignore_filter(file_paths);
    await version_file_contents_each(repository_name, filtered, lambda);
}
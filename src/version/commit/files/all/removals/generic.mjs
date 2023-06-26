import { metadata } from '../../../../../metadata.mjs';
import { version_removals } from '../../../../removals.mjs';
import { string_empty } from '../../../../../string/empty.mjs';
import { version_file_difference_generic } from '../../../../file/difference/generic.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { version_commit_files_generic } from '../../generic.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { object_is } from '../../../../../object/is.mjs';
export async function version_commit_files_all_removals_generic(repository_name, file_paths, commit_data) {
    arguments_assert(arguments, [
        js_identifier_is,
        list_is,
        object_is
    ]);
    let removals = await version_removals(repository_name, file_paths);
    let writes = await version_commit_files_generic(repository_name, removals, commit_data, difference_get);
    return writes;
    async function difference_get(repository_name, file_path) {
        let v = await version_file_difference_generic(repository_name, file_path, contents_new_get);
        return v;
    }
    function contents_new_get() {
        let v_2 = string_empty();
        return v_2;
    }
    metadata([]);
}
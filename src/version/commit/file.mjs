import { list_single_item } from '../../list/single/item.mjs';
import { version_commit_data } from './data.mjs';
import { path_is } from '../../path/is.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_commit_files } from './files.mjs';
export async function version_commit_file(repository_name, file_path) {
    arguments_assert(arguments, [
        js_identifier_is,
        path_is
    ]);
    let v = list_single_item(file_path);
    let v_2 = version_commit_data(version_commit_file, arguments);
    await version_commit_files(repository_name, v, v_2);
    metadata([]);
}
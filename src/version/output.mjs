import { version_path_outputs } from './path/outputs.mjs';
import { version_path_sub_get } from './path/sub/get.mjs';
import { directory_read_current } from '../directory/read/current.mjs';
import { version_output_generic } from './output/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_overwrite } from '../file/overwrite.mjs';
import { path_join } from '../path/join.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
export async function version_output(repository_name, directory_output_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let file_paths = await directory_read_current();
    let repository_sub_path = version_path_sub_get(repository_name, version_path_outputs());
    await version_output_generic(repository_name, file_paths, lambda);
    async function lambda(file_path, contents) {
        let file_path_output = path_join([
            repository_sub_path,
            directory_output_name,
            file_path
        ]);
        await file_overwrite(file_path_output, contents);
    }
}
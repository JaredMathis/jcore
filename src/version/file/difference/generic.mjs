import { version_property_path } from '../../property/path.mjs';
import { string_difference_get } from '../../../string/difference/get.mjs';
import { version_file_contents } from '../contents.mjs';
export async function version_file_difference_generic(repository_name, file_path, contents_new_get) {
    let contents_old = await version_file_contents(repository_name, file_path);
    let contents_new = await contents_new_get(file_path);
    let hunks_new = string_difference_get(contents_old, contents_new);
    
    console.log(file_path)

    let property_version_path = version_property_path();
    return {
        [property_version_path]: version_path,
        [property_hunks]: hunks_new
    };
}
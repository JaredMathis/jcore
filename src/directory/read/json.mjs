import { directory_property_json } from '../property/json.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { json_from } from '../../json/from.mjs';
import { directory_property_contents } from '../property/contents.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { directory_read_contents } from './contents.mjs';
export async function directory_read_json(repository_files_path) {
    let files_contents = await directory_read_contents(repository_files_path);
    for (let f of files_contents) {
        let contents = object_property_get(f, directory_property_contents());
        let json = json_from(contents);
        object_property_initialize(f, directory_property_json(), json);
    }
}
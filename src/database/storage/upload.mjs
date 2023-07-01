import { database_storage_bucket_name_object } from './bucket/name/object.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { database_storage_bucket_name } from './bucket/name.mjs';
import { object_keys_to_camel } from '../../object/keys/to/camel.mjs';
import { b2_get } from '../../b2/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_keys } from '../../object/keys.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_single } from '../../list/single.mjs';
export async function database_storage_upload(file_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    `
    b2_start_large_file
b2_get_upload_part_url (for each thread that are are uploading)
b2_upload_part or b2_copy_part (for each part of the file)
b2_finish_large_file
    `;
    const b2 = await b2_get();
    let result = await b2.getBucket(object_keys_to_camel(database_storage_bucket_name_object()));
    let data = object_property_get(result, 'data');
    let buckets = object_property_get(result, 'buckets');
    let bucket = list_single(buckets);
    return buckets;
    let mapped = object_keys_to_camel({
        bucket_id: database_storage_bucket_name(),
        file_name
    });
    return await b2.startLargeFile(mapped);
}
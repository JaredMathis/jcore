import { byes_length } from '../../../byes/length.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { object_keys_include } from '../../../object/keys/include.mjs';
import { b2_data_snake_get } from '../../../b2/data/snake/get.mjs';
import { object_merge } from '../../../object/merge.mjs';
import { object_keys_to_camel } from '../../../object/keys/to/camel.mjs';
import { database_storage_bucket_name_to_id_object } from '../bucket/name/to/id/object.mjs';
import { b2_get } from '../../../b2/get.mjs';
import { bytes_to_sha1 } from '../../../bytes/to/sha1.mjs';
import { file_read_bytes } from '../../../file/read/bytes.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { error } from '../../../error.mjs';
export async function database_storage_upload_large(file_name, file_path) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    error('this needs to be refactored to upload mulitple parts; b2 requires at least 2 parts');
    const data = await file_read_bytes(file_path);
    let hash = bytes_to_sha1(data);
    const b2 = await b2_get();
    let mapped = await database_storage_bucket_name_to_id_object(b2);
    const options_large_file = { file_name };
    let camel = object_keys_to_camel(object_merge(mapped, options_large_file));
    let result = await b2.startLargeFile(camel);
    let data_snake = b2_data_snake_get(result);
    let file_id = object_keys_include(data_snake, ['file_id']);
    let camel2 = object_keys_to_camel(file_id);
    let result2 = await b2.getUploadPartUrl(camel2);
    let data_snake2 = b2_data_snake_get(result2);
    let upload_url = object_keys_include(data_snake2, ['upload_url']);
    let authorization_token = object_property_get(data_snake2, 'authorization_token');
    const options_upload_part = {
        part_number: 1,
        upload_auth_token: authorization_token,
        data,
        hash,
        content_length: byes_length(data)
    };
    let result3 = await b2.uploadPart(object_keys_to_camel(object_merge(upload_url, options_upload_part)));
    let data_snake3 = b2_data_snake_get(result3);
    let result4 = await b2.finishLargeFile(object_keys_to_camel(object_merge(file_id, { part_sha1_array: [hash] })));
    let data_snake4 = b2_data_snake_get(result4);
    return data_snake4;
}
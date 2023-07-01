import { byes_length } from '../../byes/length.mjs';
import { file_read_bytes } from '../../file/read/bytes.mjs';
import { b2_data_snake_get } from '../../b2/data/snake/get.mjs';
import { object_keys_include } from '../../object/keys/include.mjs';
import { object_merge } from '../../object/merge.mjs';
import { database_storage_bucket_name_to_id_object } from './bucket/name/to/id/object.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { object_keys_to_camel } from '../../object/keys/to/camel.mjs';
import { b2_get } from '../../b2/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { bytes_to_sha1 } from '../../bytes/to/sha1.mjs';
export async function database_storage_upload(file_name, file_path) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const data = await file_read_bytes(file_path);
    let hash = bytes_to_sha1(data);
    `
    b2_start_large_file
b2_get_upload_part_url (for each thread that are are uploading)
b2_upload_part or b2_copy_part (for each part of the file)
b2_finish_large_file
    `;
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
    object_merge(upload_url, options_upload_part);
    `let result3 = await b2.uploadPart({
        partNumber: number;
        uploadUrl: string;
        uploadAuthToken: string;
        data: Buffer;
        hash?: string | undefined;
        onUploadProgress?: UploadProgressFn | null | undefined;
        contentLength?: number | undefined;});`;
    return data2;
}
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function database_storage_upload() {
    arguments_assert(arguments, []);
    `
    b2_start_large_file
b2_get_upload_part_url (for each thread that are are uploading)
b2_upload_part or b2_copy_part (for each part of the file)
b2_finish_large_file
    `
}
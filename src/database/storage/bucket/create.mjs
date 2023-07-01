import { b2_get } from '../../../b2/get.mjs';
import { object_keys_to_camel } from '../../../object/keys/to/camel.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function database_storage_bucket_create() {
    arguments_assert(arguments, []);
    const b2 = await b2_get();
    const options = {
        bucket_name: 'truthcode',
        bucket_type: 'allPublic'
    };
    let mapped = object_keys_to_camel(options);
    return await b2.createBucket(mapped);
}
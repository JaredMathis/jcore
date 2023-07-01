import { private_get } from '../../../private/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import B2 from 'backblaze-b2';
export async function database_storage_bucket_create() {
    arguments_assert(arguments, []);
    const b2 = new B2({
        applicationKeyId: await private_get('b2_key_id'),
        applicationKey: await private_get('b2_application_key')
    });
    await b2.authorize();
    const options = {
        bucket_name: 'truthcode',
        bucket_type: 'allPublic'
    };
    return await b2.createBucket(options);
}
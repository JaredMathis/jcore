import { private_get } from '../private/get.mjs';
import B2 from 'backblaze-b2';
export async function b2_get() {
    const b2 = new B2({
        applicationKeyId: await private_get('b2_key_id'),
        applicationKey: await private_get('b2_application_key')
    });
    await b2.authorize();
    return b2;
}
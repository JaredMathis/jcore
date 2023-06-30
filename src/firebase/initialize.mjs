import { boolean_value_false } from '../boolean/value/false.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { boolean_value_true } from '../boolean/value/true.mjs';
import { not } from '../not.mjs';
import { initializeApp } from 'firebase-admin/app';
import { cert } from 'firebase-admin/credential';
import { file_json_read } from '../file/json/read.mjs';
let initialized = boolean_value_false();
export function firebase_initialize() {
    arguments_assert(arguments, []);
    let v = not(initialized);
    if (v) {
        let v_3 = 'truthcode';
        let serviceAccount = await file_json_read(`truthcode-firebase-adminsdk-hcmrs-5fe0e2478e`);
        let v_2 = {
            projectId: v_3,
            credential: cert(serviceAccount)
        };
        initializeApp(v_2);
        initialized = boolean_value_true();
    }
}
import { boolean_value_false } from '../boolean/value/false.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { boolean_value_true } from '../boolean/value/true.mjs';
import { not } from '../not.mjs';
import { initializeApp } from 'firebase-admin/app';
let initialized = boolean_value_false();
export function firebase_initialize() {
    arguments_assert(arguments, []);
    let v = not(initialized);
    if (v) {
        let v_3 = 'truthcode';
        let v_2 = {
            projectId: v_3,
            serviceAccountId: 'firebase-adminsdk-hcmrs@truthcode.iam.gserviceaccount.com'
        };
        initializeApp(v_2);
        initialized = boolean_value_true();
    }
}
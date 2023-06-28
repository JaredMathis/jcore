import { arguments_assert } from '../../arguments/assert.mjs';
import { boolean_value_true } from '../../boolean/value/true.mjs';
import { boolean_value_false } from '../../boolean/value/false.mjs';
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
let initialized = boolean_value_false();
export function database_firestore_get() {
    arguments_assert(arguments, []);
    let v = not(initialized);
    if (v) {
        let v_3 = 'truthcode';
        let v_2 = { projectId: v_3 };
        initializeApp(v_2);
        initialized = boolean_value_true();
    }
    const db = getFirestore();
    return db;
    metadata([]);
}
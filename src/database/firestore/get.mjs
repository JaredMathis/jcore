import { boolean_value_true } from '../../boolean/value/true.mjs';
import { boolean_value_false } from '../../boolean/value/false.mjs';
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
let initialized = boolean_value_false();
export function database_firestore_get() {
    let v = not(initialized);
    if (v) {
        let v_2 = { projectId: 'truthcode' };
        initializeApp(v_2);
        initialized = boolean_value_true();
    }
    const db = getFirestore();
    return db;
    metadata([]);
}
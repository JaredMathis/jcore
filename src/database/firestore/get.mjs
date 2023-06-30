import { firebase_initialize } from '../../firebase/initialize.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { boolean_value_false } from '../../boolean/value/false.mjs';
import { metadata } from '../../metadata.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export function database_firestore_get() {
    arguments_assert(arguments, []);
    firebase_initialize();
    const db = getFirestore();
    return db;
    metadata([]);
}
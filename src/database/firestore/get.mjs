import { firebase_initialize } from '../../firebase/initialize.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export async function database_firestore_get() {
    arguments_assert(arguments, []);
    await firebase_initialize();
    const db = getFirestore();
    return db;
    metadata([]);
}
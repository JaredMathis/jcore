import { not } from '../../not.mjs';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
let initialized = false;
export function database_firestore_get() {
    if (not(initialized)) {
        initializeApp({ projectId: 'truthcode' });
        initialized = true;
    }
    const db = getFirestore();
    return db;
}
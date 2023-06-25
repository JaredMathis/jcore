import { not } from '../../not.mjs';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
let initialized = false;
export function database_firestore_get() {
    let v = not(initialized);
    if (v) {
        let v_2 = { projectId: 'truthcode' };
        initializeApp(v_2);
        initialized = true;
    }
    const db = getFirestore();
    return db;
}
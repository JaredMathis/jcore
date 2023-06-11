import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
export function database_firestore_get() {
    initializeApp({ projectId: 'truthcode' });
    const db = getFirestore();
    return db;
}
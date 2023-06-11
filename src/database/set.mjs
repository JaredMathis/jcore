
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
export async function database_set(collection_path, document_path, document_data) {
    initializeApp({ projectId: 'truthcode' });
    const db = getFirestore();
    await db.collection(collection_path).doc(document_path).set(document_data);
    return db;
}
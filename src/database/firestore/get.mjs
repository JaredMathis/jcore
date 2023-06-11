export function database_firestore_get() {
    initializeApp({ projectId: 'truthcode' });
    const db = getFirestore();
    return db;
}
export async function database_set(collection_path, document_path, document_data) {
    initializeApp({ projectId: 'truthcode' });
    const db = getFirestore();
    await db.collection(collection_path).doc(document_path).set(document_data);
    return db;
}
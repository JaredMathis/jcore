export function database_reference(db, collection_path, document_path) {
    return db.collection(collection_path).doc(document_path);
}
export function database_reference(db_or_transaction, collection_path, document_path) {
    return db_or_transaction.collection(collection_path).doc(document_path);
}
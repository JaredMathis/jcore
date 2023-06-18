export function database_reference(db, collection_path, document_path) {
    let v = db.collection(collection_path).doc(document_path);
    return v;
}
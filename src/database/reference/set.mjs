export async function database_reference_set(transaction, reference, document_data) {
    return transaction.set(reference, document_data);
}
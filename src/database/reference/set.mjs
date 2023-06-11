export async function database_reference_set(transaction, reference, document_data) {
    return await transaction.set(reference, document_data);
}
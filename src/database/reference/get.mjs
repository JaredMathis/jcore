export function database_reference_get(transaction_or_db, info_refererence) {
    return transaction_or_db.get(info_refererence);
}
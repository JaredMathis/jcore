import { metadata } from '../../metadata.mjs';
export async function database_reference_get(transaction, refererence) {
    let v = await transaction.get(refererence);
    return v;
    metadata([]);
}
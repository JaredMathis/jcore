import { object_keys } from '../../object/keys.mjs';
export async function database_reference_get(transaction, refererence) {
    return await transaction.get(refererence);
}
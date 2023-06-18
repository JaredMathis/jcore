import { object_keys } from '../../object/keys.mjs';
export async function database_reference_get(transaction, refererence) {
    let v = await transaction.get(refererence);
    return v;
}
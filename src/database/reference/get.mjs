import { object_keys } from "../../object/keys.mjs";

export async function database_reference_get(transaction, info_refererence) {
    return await transaction.get(info_refererence);
}
import { object_keys } from "../../object/keys.mjs";

export function database_reference_get(transaction, info_refererence) {
    return transaction.get(info_refererence);
}
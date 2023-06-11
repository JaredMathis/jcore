import { object_keys } from "../../object/keys.mjs";

export function database_reference_get(transaction_or_db, info_refererence) {
    return info_refererence.get();
}
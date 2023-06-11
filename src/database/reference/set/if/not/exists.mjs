import { database_reference_set } from '../../../set.mjs';
import { database_reference_get } from '../../../get.mjs';
export async function database_reference_set_if_not_exists(transaction, info_refererence, value) {
    const info = await database_reference_get(transaction, info_refererence);
    if (!info.exists()) {
        database_reference_set(info, value);
    }
    return info;
}
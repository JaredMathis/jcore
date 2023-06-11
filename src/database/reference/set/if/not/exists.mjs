import { database_reference_set } from '../../../set.mjs';
import { database_reference_get } from '../../../get.mjs';
export async function database_reference_set_if_not_exists(info_refererence, value) {
    const info = database_reference_get(info_refererence);
    if (!info.exists) {
        await database_reference_set(info_refererence, value);
    }
    return info;
}
import { not } from '../../../../../not.mjs';
import { database_reference_set } from '../../../set.mjs';
import { database_reference_get } from '../../../get.mjs';
export async function database_reference_set_if_not_exists(transaction, info_refererence, value) {
    const info = await database_reference_get(transaction, info_refererence);
    if (not(info.exists)) {
        await database_reference_set(transaction, info_refererence, value);
    }
}
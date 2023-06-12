import { database_reference_data } from '../data.mjs';
import { database_reference_get } from '../get.mjs';
export async function database_reference_get_data(transaction, info_refererence) {
    const info = await database_reference_get(transaction, info_refererence);
    let info_data = database_reference_data(info);
    return info_data;
}
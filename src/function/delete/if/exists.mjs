import { function_delete } from '../../delete.mjs';
import { function_exists } from '../../exists.mjs';
export async function function_delete_if_exists(function_name_result) {
    if (await function_exists(function_name_result))
        await function_delete(function_name_result);
}
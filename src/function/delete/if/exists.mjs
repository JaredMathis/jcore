import { metadata } from '../../../metadata.mjs';
import { function_delete } from '../../delete.mjs';
import { function_exists } from '../../exists.mjs';
export async function function_delete_if_exists(function_name) {
    if (await function_exists(function_name))
        await function_delete(function_name);
    metadata([]);
}
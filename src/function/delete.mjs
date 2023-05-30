import { function_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
export async function function_delete(function_name) {
    assert(await function_exists(function_name));
}
import { git_hub_cache_get } from './get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_hub_cache_clear() {
    arguments_assert(arguments, []);
    let result = await git_hub_cache_get();
    return result;
}
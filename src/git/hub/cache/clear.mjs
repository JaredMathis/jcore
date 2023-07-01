import { git_hub_cache_get } from './get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_map } from '../../../list/map.mjs';
import { json_from } from '../../../json/from.mjs';
export async function git_hub_cache_clear() {
    arguments_assert(arguments, []);
    let result = await git_hub_cache_get();
    let mapped = list_map(result, json_from);
    return mapped;
}
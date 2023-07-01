import { git_hub_cache_get } from './get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_map } from '../../../list/map.mjs';
import { json_from } from '../../../json/from.mjs';
import { list_filter } from '../../../list/filter.mjs';
export async function git_hub_cache_clear() {
    arguments_assert(arguments, []);
    let result = await git_hub_cache_get();
    let filtered = list_filter(result, r => {
        let jf = json_from(r);
    });
    return filtered;
}
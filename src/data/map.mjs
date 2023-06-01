import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { data_overwrite } from './overwrite.mjs';
import { data_get } from './get.mjs';
export async function data_map(map) {
    arguments_assert(arguments, [tautology]);
    let data = await data_get();
    map(data);
    await data_overwrite(data);
    metadata([]);
}
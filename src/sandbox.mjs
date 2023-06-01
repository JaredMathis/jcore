import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { function_name_get } from './function/name/get.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    await function_name_get(a);
    metadata([]);
}
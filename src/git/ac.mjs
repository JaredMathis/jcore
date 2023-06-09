import { git_pacp_generic } from './pacp/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function git_ac() {
    arguments_assert(arguments, []);
    let sync = false;
    await git_pacp_generic(sync);
    metadata([]);
}
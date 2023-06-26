import { boolean_value_false } from '../boolean/value/false.mjs';
import { git_pacp_generic } from './pacp/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function git_ac() {
    arguments_assert(arguments, []);
    let sync = boolean_value_false();
    await git_pacp_generic(sync);
    metadata([]);
}
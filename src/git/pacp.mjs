import { boolean_value_true } from '../boolean/value/true.mjs';
import { metadata } from '../metadata.mjs';
import { git_pacp_generic } from './pacp/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function git_pacp() {
    arguments_assert(arguments, []);
    let sync = boolean_value_true();
    await git_pacp_generic(sync);
    metadata([]);
}
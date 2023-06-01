import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { tautology } from '../../tautology.mjs';
export function refactor_metadata_add(args) {
    arguments_assert(arguments, [tautology]);
    let {parsed, function_declaration} = args;
    error('todo: refactor_metadata_add');
}
import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_mapper_with_function_declaration_generic } from './generic.mjs';
export function js_mapper_with_function_declaration_get(mapper) {
    arguments_assert(arguments, [tautology]);
    return async function js_mapper_with_function_declaration(args) {
        let skip_if_no_function_declaration = true;
        await js_mapper_with_function_declaration_generic(args, mapper);
    };
}
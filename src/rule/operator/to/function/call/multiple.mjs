import { error } from '../../../../../error.mjs';
import { and } from '../../../../../and.mjs';
import { rule_operator_to_function_call_generic } from './generic.mjs';
import { equal } from '../../../../../equal.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function rule_operator_to_function_call_multiple() {
    arguments_assert(arguments, []);
    await rule_operator_to_function_call_generic(equal, '===', error());
    await rule_operator_to_function_call_generic(and, '&&', error());
}
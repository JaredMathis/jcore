import { rule_operator_to_function_call_generic } from './generic.mjs';
import { equal } from '../../../../../equal.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
export async function rule_operator_to_function_call_equal() {
    arguments_assert(arguments, []);
    await rule_operator_to_function_call_generic(equal, '===');
}
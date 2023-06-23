import { rule_function_call_arguments_are_identifiers } from './rule/function/call/arguments/are/identifiers.mjs';
import { rule_tests_pass } from './rule/tests/pass.mjs';
import { rule_function_async_and_suffix_async_implies_suffix_asynk } from './rule/function/async/and/suffix/async/implies/suffix/asynk.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function rules() {
    arguments_assert(arguments, []);
    await rule_function_async_and_suffix_async_implies_suffix_asynk();
    await rule_function_call_arguments_are_identifiers();
    await rule_tests_pass();
}
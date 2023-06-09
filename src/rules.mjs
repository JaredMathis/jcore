import { refactor_functions_object_expression_value_assign } from './refactor/functions/object/expression/value/assign.mjs';
import { refactor_functions_returnify } from './refactor/functions/returnify.mjs';
import { rule_if_statement_arguments_are_identifiers } from './rule/if/statement/arguments/are/identifiers.mjs';
import { metadata } from './metadata.mjs';
import { refactor_functions_unlambdaify } from './refactor/functions/unlambdaify.mjs';
import { rule_operator_to_function_call_multiple } from './rule/operator/to/function/call/multiple.mjs';
import { rule_literals_are_function_outputs } from './rule/literals/are/function/outputs.mjs';
import { rule_function_call_arguments_are_identifiers } from './rule/function/call/arguments/are/identifiers.mjs';
import { rule_tests_pass } from './rule/tests/pass.mjs';
import { rule_function_async_and_suffix_async_implies_suffix_asynk } from './rule/function/async/and/suffix/async/implies/suffix/asynk.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function rules() {
    arguments_assert(arguments, []);
    await rule_function_async_and_suffix_async_implies_suffix_asynk();
    await refactor_functions_returnify();
    await refactor_functions_object_expression_value_assign();
    await rule_literals_are_function_outputs();
    await rule_operator_to_function_call_multiple();
    await refactor_functions_unlambdaify();
    await rule_if_statement_arguments_are_identifiers();
    await rule_function_call_arguments_are_identifiers();
    await rule_tests_pass();
    metadata([]);
}
import { object_property_exists } from '../../../../object/property/exists.mjs';
import { tautology } from '../../../../tautology.mjs';
import { js_identifier_counts } from '../../../../js/identifier/counts.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { equal } from '../../../../equal.mjs';
import { assert } from '../../../../assert.mjs';
import { js_find_call_expressions_to_name } from '../../../../js/find/call/expressions/to/name.mjs';
import { js_statement_expression_to_expression } from '../../../../js/statement/expression/to/expression.mjs';
import { js_function_delcaration_to_statement_first } from '../../../../js/function/delcaration/to/statement/first.mjs';
import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { function_names_each_filter } from '../../../names/each/filter.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { function_is } from '../../../is.mjs';
import { todo } from '../../../../todo.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
export async function function_arguments_assert_tautology_generic(on_equals) {
    arguments_assert(arguments, [function_is]);
    let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
    await function_names_each_filter(logic, function_name => {
        let result = !list_contains(excludes, function_name);
        return result;
    });
    async function logic(args) {
        let {parsed, function_name} = args;
        await js_mapper_args_to_statement_arguments_assert(args);
        let function_declaration = js_export_function_single(parsed);
        let statement_first = js_function_delcaration_to_statement_first(function_declaration);
        let expression = js_statement_expression_to_expression(statement_first);
        let name_actual = js_find_call_expressions_to_name(expression);
        assert(equal(name_actual, function_name_get(arguments_assert)));
        let counts = js_identifier_counts(expression);
        todo(`Maybe this should be ${ arguments_assert_todo } not ${ tautology }`);
        let property_name = function_name_get(tautology);
        if (object_property_exists(counts, property_name)) {
            return await on_equals(function_name);
        }
    }
}
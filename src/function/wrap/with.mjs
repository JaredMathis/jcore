import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { js_code_function_declaration_to_statement_assignment_wrapped } from '../../js/code/function/declaration/to/statement/assignment/wrapped.mjs';
import { list_length_is_value } from '../../list/length/is/value.mjs';
import { list_single } from '../../list/single.mjs';
import { js_function_declaration_to_params_names } from '../../js/function/declaration/to/params/names.mjs';
import { function_to_declaration } from '../to/declaration.mjs';
import { js_code_function_declaration_to_statement_assignment } from '../../js/code/function/declaration/to/statement/assignment.mjs';
import { function_wrap_generic } from './generic.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_length_is_1 } from '../../list/length/is/1.mjs';
import { comment } from '../../comment.mjs';
import { list_last_index } from '../../list/last/index.mjs';
import { list_last_remove } from '../../list/last/remove.mjs';
export async function function_wrap_with(function_name_to_wrap, function_name_to_add, function_name_map) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_is
    ]);
    let function_declaration_map = await function_to_declaration(function_name_map);
    let function_name_map_inputs = js_function_declaration_to_params_names(function_declaration_map);
    comment(`a mapping function must have 1 input (and 1 output)`);
    assert(list_length_is_1(function_name_map_inputs));
    await function_wrap_generic(function_name_to_wrap, function_name_to_add, function map(args) {
        let {identifier, statements_code} = args;
        assert(list_length_is_value(statements_code, 2));
        comment(`The index we'll add at`);
        let index = list_last_index(statements_code);
        list_last_remove(statements_code);
        let mapped = js_code_function_declaration_to_statement_assignment(function_declaration_map, list_single(identifier), 'mapped');
        let statements_code_new = [
            js_code_function_declaration_to_statement_assignment_wrapped(function_declaration, identifier),
            js_code_return_statement(identifier)
        ];
    });
}
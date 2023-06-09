import { metadata } from '../../metadata.mjs';
import { list_single_item } from '../../list/single/item.mjs';
import { list_replace } from '../../list/replace.mjs';
import { function_wrap_generic_identifier_result } from './generic/identifier/result.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { js_code_function_declaration_to_statement_assignment_wrapped } from '../../js/code/function/declaration/to/statement/assignment/wrapped.mjs';
import { js_function_declaration_to_params_names } from '../../js/function/declaration/to/params/names.mjs';
import { function_name_to_declaration } from '../name/to/declaration.mjs';
import { js_code_function_declaration_to_statement_assignment } from '../../js/code/function/declaration/to/statement/assignment.mjs';
import { function_wrap_generic } from './generic.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_length_is_1 } from '../../list/length/is/1.mjs';
import { comment } from '../../comment.mjs';
export async function function_wrap_with(function_name_to_wrap, function_name_to_add, function_name_map) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        js_identifier_is
    ]);
    let function_declaration_map = await function_name_to_declaration(function_name_map);
    let function_name_map_inputs = js_function_declaration_to_params_names(function_declaration_map);
    comment(`a mapping function must have 1 input (and 1 output)`);
    let v = list_length_is_1(function_name_map_inputs);
    assert(v);
    let v_2 = function map(args) {
        let {function_declaration, statements_code} = args;
        let identifier_result = function_wrap_generic_identifier_result();
        const identifier_mapped = 'result_to_be_mapped';
        let v_3 = list_single_item(identifier_mapped);
        let statements_code_new = [
            js_code_function_declaration_to_statement_assignment_wrapped(function_declaration, identifier_mapped),
            js_code_function_declaration_to_statement_assignment(function_declaration_map, v_3, identifier_result),
            js_code_return_statement(identifier_result)
        ];
        list_replace(statements_code, statements_code_new);
    };
    await function_wrap_generic(function_name_to_wrap, function_name_to_add, v_2);
    metadata([]);
}
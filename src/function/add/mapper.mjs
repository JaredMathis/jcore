import { string_identifier_parts_from } from '../../string/identifier/parts/from.mjs';
import { js_brace_left_right } from '../../js/brace/left/right.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_open_vs_code } from '../open/vs/code.mjs';
import { function_add_with_statements_synchronized } from './with/statements/synchronized.mjs';
import { js_code_await } from '../../js/code/await.mjs';
import { function_add_inputs } from './inputs.mjs';
import { function_input_add_type } from '../input/add/type.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { js_code_statement } from '../../js/code/statement.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { comment } from '../../comment.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { list_single_item } from '../../list/single/item.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
import { list_first } from '../../list/first.mjs';
import { list_contains } from '../../list/contains.mjs';
import { string_split } from '../../string/split.mjs';
import { function_name_separator } from '../name/separator.mjs';
import { assert_message } from '../../assert/message.mjs';
import { list_multiple_combine } from '../../list/multiple/combine.mjs';
export async function function_add_mapper(function_name_suffix) {
    arguments_assert(arguments, [string_identifier_is]);
    let v_3 = function_name_separator();
    let function_name_suffix_parts = string_split(function_name_suffix, v_3);
    let function_name_suffix_parts_first = list_first(function_name_suffix_parts);
    const prefix_function = 'function';
    const prefix_refactor = 'refactor';
    let prefixes = [
        prefix_function,
        prefix_refactor
    ];
    assert_message(!list_contains(prefixes, function_name_suffix_parts_first), `Cannot start with: ` + prefixes);
    let v_4 = list_multiple_combine([
        [prefix_function],
        function_name_suffix_parts
    ]);
    let function_name = string_identifier_parts_from(v_4);
    let v_5 = list_multiple_combine([
        [prefix_refactor],
        function_name_suffix_parts
    ]);
    let function_name_refactor = string_identifier_parts_from(v_5);
    await function_add_inputs(function_name_refactor, 'args');
    let input = 'function_name';
    comment(` await function_map(function_name_get(refactor_asyncify), function_name_new);`);
    let fn = function_map_with_args;
    const expression_code_args = [
        js_code_call_expression_with_args(function_name_get(function_name_get), [function_name_refactor]),
        input,
        js_brace_left_right()
    ];
    let v = function_name_get(fn);
    let expression_code = js_code_call_expression_with_args(v, expression_code_args);
    let awaited = js_code_await(expression_code);
    let statement_code = js_code_statement(awaited);
    let is_async = true;
    await function_add_with_statement_synchronized(statement_code, function_name, is_async);
    let v_2 = function_name_get(string_identifier_is);
    await function_input_add_type(function_name, input, v_2);
    await function_open_vs_code(function_name);
}

async function function_add_with_statement_synchronized(statement_code, function_name, is_async) {
    let statement = js_parse_statement(statement_code);
    let statements = list_single_item(statement);
    await function_add_with_statements_synchronized(function_name, statements, is_async);
}

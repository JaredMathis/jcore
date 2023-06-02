import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_parse_call_expression } from '../../../js/parse/call/expression.mjs';
import { js_mapper_args_to_metadata_args } from '../../../js/mapper/args/to/metadata/args.mjs';
export async function refactor_metadata_add_function(args, metadata_function) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    const metadata_function_name = function_name_get(metadata_function);
    let metadata_args = await js_mapper_args_to_metadata_args(args);
    let metadata_function_parsed = js_parse_call_expression(metadata_function_name);
    comment(`If this fails, the code needs enhancing to handle more complex scenarios`);
    assert(list_length_is_0(metadata_args));
    list_add(metadata_args, metadata_function_parsed);
}
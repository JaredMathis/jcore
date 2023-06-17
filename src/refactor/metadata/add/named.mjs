import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { js_parse_call_expression } from '../../../js/parse/call/expression.mjs';
import { js_mapper_args_to_metadata_args } from '../../../js/mapper/args/to/metadata/args.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
export async function refactor_metadata_add_named(args, metadata_function_name) {
    arguments_assert(arguments, [
        js_mapper_args_is,
        string_identifier_is
    ]);
    let metadata_args = await js_mapper_args_to_metadata_args(args);
    let metadata_function_parsed = js_parse_call_expression(metadata_function_name);
    comment(`If this fails, the code needs enhancing to handle more complex scenarios`);
    assert(list_empty(metadata_args));
    list_add(metadata_args, metadata_function_parsed);
}
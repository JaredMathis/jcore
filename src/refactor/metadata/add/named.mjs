import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { js_parse_call_expression } from '../../../js/parse/call/expression.mjs';
import { js_mapper_args_to_metadata_args } from '../../../js/mapper/args/to/metadata/args.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
export async function refactor_metadata_add_named(args, metadata_function_name) {
    arguments_assert(arguments, [
        js_mapper_args_is,
        js_identifier_is
    ]);
    let metadata_args = await js_mapper_args_to_metadata_args(args);
    let metadata_function_parsed = js_parse_call_expression(metadata_function_name);
    comment(`If this fails, the code needs enhancing to handle more complex scenarios`);
    let v = list_empty(metadata_args);
    assert(v);
    list_add(metadata_args, metadata_function_parsed);
    await refactor_import_fix(args);
    metadata([]);
}
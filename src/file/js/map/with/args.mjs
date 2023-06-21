import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { path_is } from '../../../../path/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_run } from '../../../../function/run.mjs';
import { file_js_map_args } from '../args.mjs';
import { object_merge } from '../../../../object/merge.mjs';
export async function file_js_map_with_args(file_path, function_name_mapper, args) {
    arguments_assert(arguments, [
        path_is,
        js_identifier_is,
        defined_is
    ]);
    await file_js_map_args(file_path, async function mapper(mapper_args) {
        object_merge(args, mapper_args);
        await function_run(function_name_mapper, [mapper_args]);
    });
}
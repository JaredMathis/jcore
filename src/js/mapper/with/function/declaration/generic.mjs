import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { object_merge } from '../../../../../object/merge.mjs';
import { js_export_function_single_or_null } from '../../../../export/function/single/or/null.mjs';
export async function js_mapper_with_function_declaration_generic(args, mapper) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let {parsed, file_path} = args;
    let function_declaration = js_export_function_single_or_null(parsed);
    if (function_declaration !== null) {
        object_merge({ function_declaration }, args);
    }
    await mapper(args);
}
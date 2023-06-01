import { object_merge } from '../../../../../object/merge.mjs';
import { js_export_function_single_or_null } from '../../../../export/function/single/or/null.mjs';
export async function js_mapper_with_function_declaration_generic(args, mapper, skip_if_no_function_declaration) {
    let {parsed, file_path} = args;
    let function_declaration = js_export_function_single_or_null(parsed);
    if (skip_if_no_function_declaration) {
    }
    if (function_declaration !== null) {
        object_merge({ function_declaration }, args);
    }
    await mapper(args);
}
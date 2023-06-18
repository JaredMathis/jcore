import { js_function_declaration_to_name } from '../../../../function/declaration/to/name.mjs';
export function js_mapper_args_to_function_name(args) {
    let {function_declaration} = args;
    let function_name = js_function_declaration_to_name(function_declaration);
    return function_name;
}
import { defined_is } from '../../../../../../defined/is.mjs';
import { js_mapper_args_property_function_declaration } from '../declaration.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function js_mapper_args_property_function_declaration_get(js_mapper_args) {
    arguments_assert(arguments, [defined_is]);
    return object_property_get(js_mapper_args, js_mapper_args_property_function_declaration());
}
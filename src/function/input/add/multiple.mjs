import { function_input_add } from '../add.mjs';
import { string_identifier_multiple_parse } from '../../../string/identifier/multiple/parse.mjs';
export async function function_input_add_multiple(inputs_string, function_name) {
    let inputs = string_identifier_multiple_parse(inputs_string);
    for (let i of inputs) {
        await function_input_add(function_name, i);
    }
}
import { js_identifiers } from '../js/identifiers.mjs';
import { function_parse } from './parse.mjs';
export async function function_identifiers(function_name) {
    let parsed = await function_parse(function_name);
    let identifiers = js_identifiers(parsed);
    return identifiers;
}
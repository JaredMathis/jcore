import { js_parse } from './parse.mjs';
import { try_catch } from '../try/catch.mjs';
import escodegen from 'escodegen';
export function js_unparse(parsed) {
    return try_catch(js_parse, lambda);
    function lambda() {
        return escodegen.generate(parsed);
    }
}
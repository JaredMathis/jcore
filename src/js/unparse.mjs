import { js_parse } from './parse.mjs';
import { try_catch } from '../try/catch.mjs';
import escodegen from 'escodegen';
export function js_unparse(parsed) {
    try {
        return escodegen.generate(parsed);
    } catch (e) {
        throw e;
    }
    return try_catch(js_parse, lambda);
    function lambda() {
        return escodegen.generate(parsed);
    }
}
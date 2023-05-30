import escodegen from 'escodegen';
export function js_unparse(parsed) {
    try {
        return escodegen.generate(parsed);
    } catch (e) {
        throw e;
    }
}
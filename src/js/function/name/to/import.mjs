import { function_extension } from "../../../../function/extension.mjs";
import { js_parse_statement } from "../../../parse/statement.mjs";

export function js_function_name_to_import(m) {
    const statement_code = `import ${m} from './${m}${function_extension()}'`;
    let import_new = js_parse_statement(statement_code);
    return import_new;
}
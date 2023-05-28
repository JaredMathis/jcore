export function file_js_map(file_path, function_name_mapper) {
    let parsed = await file_js_parse(file_path);
    
    let unparsed = js_unparse(parsed);
    file_overwrite(file_path, unparsed);
}
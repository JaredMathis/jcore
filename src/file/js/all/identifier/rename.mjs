export function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    
    await file_js_map_args(file_path, args => js_identifier_rename(args, identifier_name_old, identifier_name_new));
}
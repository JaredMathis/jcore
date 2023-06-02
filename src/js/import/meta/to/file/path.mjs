export function js_import_meta_to_file_path(import_meta) {
    return fileURLToPath(import_meta.url);
}
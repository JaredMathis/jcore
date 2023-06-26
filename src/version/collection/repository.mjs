import { function_name_separator } from '../../function/name/separator.mjs';
export function version_collection_repository(repository_name) {
    let fns = function_name_separator();
    let database_collection_name = `repository${ fns }${ repository_name }`;
    return database_collection_name;
    metadata([]);
}
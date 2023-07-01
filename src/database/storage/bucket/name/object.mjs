import { database_storage_bucket_name } from '../name.mjs';
export function database_storage_bucket_name_object() {
    return { bucket_name: database_storage_bucket_name() };
}
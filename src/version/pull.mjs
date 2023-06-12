import { database_reference_get } from '../database/reference/get.mjs';
import { database_document_info_reference } from '../database/document/info/reference.mjs';
import { database_firestore_get } from '../database/firestore/get.mjs';
import { version_property_commit_latest } from './property/commit/latest.mjs';
import { database_transaction } from '../database/transaction.mjs';
import { version_collection_repository } from './collection/repository.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function version_pull(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let db = database_firestore_get();
    let database_collection_name = version_collection_repository(repository_name);
    const property_commit_latest = version_property_commit_latest();
    let info_refererence = database_document_info_reference(db, database_collection_name);
    await database_transaction(db, async transaction => {
        await database_reference_get(transaction, info_refererence);
    });
}
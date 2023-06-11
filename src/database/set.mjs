import { database_firestore_get } from './firestore/get.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
export async function database_set(collection_path, document_path, document_data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const db = database_firestore_get();
    await db.collection(collection_path).doc(document_path).set(document_data);
}
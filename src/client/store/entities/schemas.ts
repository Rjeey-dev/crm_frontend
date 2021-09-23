import {schema} from "normalizr";

export const KEY_USERS = 'users';
export const KEY_TASKS = 'tasks';

export const users = new schema.Entity(KEY_USERS);
export const tasks = new schema.Entity(KEY_TASKS);

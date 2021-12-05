import {schema} from "normalizr";

export const KEY_USERS = 'users';
export const KEY_TASKS = 'tasks';
export const KEY_STATISTICS = 'statistics';

export const users = new schema.Entity(KEY_USERS);
export const tasks = new schema.Entity(KEY_TASKS);
export const statistics = new schema.Entity(KEY_STATISTICS);

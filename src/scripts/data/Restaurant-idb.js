import { openDB } from 'idb';

const STORE_NAME = 'resto-store';
const OBJECT_STORE_NAME = 'restos';

const dbPromise = openDB(STORE_NAME, 1, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const Database = {

    async getAllRestos() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async updateResto(resto) {
        return (await dbPromise).put(OBJECT_STORE_NAME, resto);
    },
    async deleteResto(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
    async putResto(resto) {
        // eslint-disable-next-line no-prototype-builtins
        if (!resto.hasOwnProperty('id')) {
            return;
        }

        return (await dbPromise).put(OBJECT_STORE_NAME, resto);
    },
    async getResto(id) {
        if (!id) {
            return;
        }
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
};

export default Database;


import {writeFile} from 'node:fs/promises';

const create = async () => {
    const text = 'I am fresh and young';
    try {
        await writeFile('files/fresh.txt', text, {flag:'wx'});
    } catch (e) {
        console.log("FS operation failed");
    }
};

await create();

import fetch from 'node-fetch';

export type ThreadType = {
    id?: string;
    title: string,
    content: string,
    createdBy: string
}

export const getThreads = async () => {
    return (await (await fetch('http://localhost:8080/category/6347fc60fe6cb65f108f231b/thread')).json());
}

export const postThread = async (thread: ThreadType) : Promise<ThreadType> => {
    return (await (await fetch('http://localhost:8080/category/6347fc60fe6cb65f108f231b/thread', {
            method: 'POST',
            body: JSON.stringify(thread),
            headers: {
                'content-type': 'application/json'
            }
        })).json() as ThreadType);
}
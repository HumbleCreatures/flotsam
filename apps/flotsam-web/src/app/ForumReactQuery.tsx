import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react';

import { getThreads, postThread, ThreadType } from '@flotsam/flotsam-shared';

const ForumReactQuery = () => {

    const initialFormData = {
        title: '', content: '', createdBy: 'admin'
    };

    const [formData, setFormData] = useState(initialFormData);

    const queryClient = useQueryClient()

    const query = useQuery(['threads'], getThreads)

    const mutation = useMutation(postThread, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(['threads'])
            setFormData(initialFormData);
        },
    })

    return <section>
        <h1>Forum (React Query)</h1>
        <h2>Inlägg</h2>
        <ul>
            {
                query.data?.map((thread: ThreadType) => (
                    <li>{thread.title}</li>
                ))
            }
        </ul>
        <h2>Posta nytt inlägg</h2>
        <form onSubmit={(event) => { event.preventDefault(); mutation.mutate(formData) }}>
            <input type="text" placeholder="Title" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
            <input type="text" placeholder="Content" value={formData.content} onChange={(event) => setFormData({ ...formData, content: event.target.value })} />
            <button type="submit">Posta inlägg!</button>
        </form>
    </section>
}

export default ForumReactQuery;
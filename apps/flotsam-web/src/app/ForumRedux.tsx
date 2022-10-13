import { useAppDispatch, useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { fetchThreads, setTitle, setContent, postThread } from './store/reducers/forumSlice';

const ForumRedux = () => {

    const threads = useAppSelector(state => state.forum.threads);
    const status = useAppSelector(state => state.forum.status);
    const formData = useAppSelector(state => state.forum.formData);

    const dispatch = useAppDispatch();

    useEffect(() => {

        const loadThreads = async () => {
            dispatch(fetchThreads());
        }

        loadThreads();

    }, [])

    return <section>
        <h1>Forum</h1>
        <h2>Inlägg</h2>
        {status === 'pending' ? <p>Laddar...</p> : status === 'failed' ? <p>Något gick fel</p> :
            <ul>
                {
                    threads.map(thread => (
                        <li>{thread.title}</li>
                    ))
                }
            </ul>}
        <h2>Posta nytt inlägg</h2>
        <form onSubmit={(event) => { event.preventDefault(); dispatch(postThread()) }}>
            <input type="text" placeholder="Title" value={formData.title} onChange={(event) => dispatch(setTitle(event.target.value))} />
            <input type="text" placeholder="Content" value={formData.content} onChange={(event) => dispatch(setContent(event.target.value))} />
            <button type="submit">Posta inlägg!</button>
        </form>
    </section>
}

export default ForumRedux;



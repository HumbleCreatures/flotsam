import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchCatFacts } from './store/reducers/catFactSlice';

const CatFact = () => {

    const dispatch = useAppDispatch();
    const catFacts = useAppSelector(state => state.catfact.facts);
    const status = useAppSelector(state => state.catfact.status);

    useEffect(() => {
        dispatch(fetchCatFacts());
    }, [])

    if (status === "pending") {
        return <p>Laddar</p>
    } else if (status === "failed") {
        return <p>Nåt gick galet</p>
    } else {
        return <p>{catFacts.map(catFact => <p key={catFact.id}>{catFact.fact}</p>)}</p>;
    }
}

export default CatFact;
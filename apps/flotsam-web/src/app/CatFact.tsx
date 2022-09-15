import { useState, useEffect } from "react";

type CatFactType = {
    id?: number;
    fact: string,
    length: number
}

const CatFact = () => {
    const [catFacts, setCatFacts] = useState<CatFactType[]>();

    useEffect(() => {
        const loadCats = async () => {
            const response = await fetch('https://catfact.ninja/facts');
            const catFactList = await response.json();

            const catFactsWithId = catFactList.data.map((catFact: CatFactType, index: number) => ({ ...catFact, id: index}));
            setCatFacts(catFactList.data);
        }
        loadCats();
    }, [])

    return <p>{ catFacts?.map(catFact => <p key={catFact.id}>{catFact.fact}</p>) }</p>
}

export default CatFact;
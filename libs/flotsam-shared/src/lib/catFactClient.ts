type CatFact = {
  fact: string;
  length: number;
}

export const getCatFact = async () : Promise<CatFact> => {
  const response = await fetch('https://catfact.ninja/fact');
  return response.json();   
}

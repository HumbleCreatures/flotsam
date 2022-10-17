import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});



export const BoatList = () => {
 return <ApolloProvider client={client}>
  <BoatListQuery />
 </ApolloProvider>
}


const BoatListQuery =  () => {
  const { data, loading, error } = useQuery(gql`
  query CurrentUser {
    currentUser {
      boats {
        name
      }
      name
    }
  }
    `);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }


  return (
    <div>
      <div>{data.currentUser.name}</div>
      {data.currentUser.boats.map((boat: any) => (
        <div>{boat.name}</div>
      ))}
    </div>
  );


}


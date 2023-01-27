import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import gql from 'graphql-tag'
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: userInfo ? `Bearer ${userInfo.token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



export async function loadGraphqlAsync(query) {

 // body:JSON.stringify({query:`{sayHello(name:"${name}")}`})

  // const query=gql`
  // {
  //   greeting
  // }
  // `

 // elements:${JSON.stringify(args.elements)}
//  const query = `
//  mutation {
//    update ( id:"${args.id}" name:"${args.name}" iconFile:"${args.iconFile}" elements:${args.elements}){
//      id
//      name
//      iconFile
//      elements {
//        id name link
//        elements {
//          id name link
//        }
//      }
//    }
//  }`;
    
       query=gql`${query}`

    

  const {data} = await client.query({query}) ;
  console.log("graphgser",data);
  return data;
  }
//   const Data =  loadGraphAsync();
//   console.log("graphglll",Data);
  //export const loadGraphAsync
  
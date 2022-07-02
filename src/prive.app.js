import { Container, Header, Main, Footer } from "./components";
import { RoutesFunch } from "./routes/RoutesFunch";
import { useEffect } from 'react'
import useAuth from "./hooks/useAuth";


function Prive() {
   const { setMillion } = useAuth()

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
       .then(re => re.json())
       .then(data => setMillion(data)) 
   }, []);

    return ( 
      <Container>
        <Header />
        <Main>
          <RoutesFunch />
        </Main>
        <Footer />
      </Container>

     );
} 

export default Prive;
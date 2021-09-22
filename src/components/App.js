import './App.css';
import SignUp from './SignUp'
import { Container } from 'react-bootstrap'
function App() {

  // to avoid SignUp page taking fullwidth we must wrap it up in a container
  return (
    <Container className="d-flex align-items-center justify-content-center " style={{ minHeight: "100vh" }}>

      {/* this won't be less than 400px*/}
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container>
  );
}

export default App;

import { Header } from './components/Header/Header';
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <>
    <Header />
      <Post
        author="Carlos Matos"
        content="Bla bla bla"
      />
      <Post
        author="Pietro Matos"
        content="Bla bla bla"
      />
      <Post
        author="Isabelle Matos"
        content="Bla bla bla"
      />
    </>
  );
}
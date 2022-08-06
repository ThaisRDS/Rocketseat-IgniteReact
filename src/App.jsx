import styles from './App.module.css';
import './global.css'

import { Post } from './Post'
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
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
        </main>

      </div>

    </>
  );
}
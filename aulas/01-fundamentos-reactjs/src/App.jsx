import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Jhon"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores doloribus accusantium ipsum architecto iste. Commodi dignissimos, ipsum ea sit animi dolor deserunt qui iusto, pariatur quas, porro incidunt explicabo?"
          />
        </main>
      </div>
    </div>
  )
}






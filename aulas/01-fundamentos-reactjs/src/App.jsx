import {Post} from './Post';
import { Header } from './components/Header';
import './style.css'

export function App() {

  return (
    <div>
      <Header/>
      
      <Post 
        author="Jhon Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores doloribus accusantium ipsum architecto iste. Commodi dignissimos, ipsum ea sit animi dolor deserunt qui iusto, pariatur quas, porro incidunt explicabo?"
      />
      <Post 
        author="Marie Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae tempora iste placeat fugit quidem, illo perspiciatis earum! Ipsum saepe vitae culpa sapiente cumque veniam consequuntur ullam, non nostrum labore?"
      />
      <Post 
        author="Richie Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio incidunt obcaecati laborum sit reiciendis nulla ex impedit libero, laudantium sed, at doloribus quibusdam tempore rem fugiat officia dolore ut."
      />
    </div>
  )
}






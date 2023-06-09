import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://source.unsplash.com/random/500x350/?tech"
      />
      
      <div className={styles.profile}>
        <Avatar src='https://github.com/lvdamaceno.png'/>
        <strong>Vinicius Damaceno</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine size={20} />

          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
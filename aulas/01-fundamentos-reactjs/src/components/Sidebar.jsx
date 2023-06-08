import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://source.unsplash.com/random/500x350/?tech"
      />
      
      <div className={styles.profile}>
        <img 
          className={styles.avatar} 
          src="https://www.github.com/lvdamaceno.png"
        />
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
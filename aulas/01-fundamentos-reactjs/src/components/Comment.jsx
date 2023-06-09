import { HandsClapping, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://www.w3schools.com/howto/img_avatar.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhon Doe</strong>
              <time title='8 de junho as 19:00h' dateTime='2023-06-08 19:00:00'>
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            Muito bom, parabéns!!
          </p>
        </div>
        <footer>
          <button>
            <HandsClapping />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
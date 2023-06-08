import { HandsClapping, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/lvdamaceno.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Damaceno</strong>
              <time title='8 de junho as 19:00h' dateTime='2023-06-08 19:00:00'>
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!!
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
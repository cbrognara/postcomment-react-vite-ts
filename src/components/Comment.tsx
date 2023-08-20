import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [countLike, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  
  function handleLikeComment() {
    setLikeCount((prev) => {
      return prev + 1
    })
  }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://github.com/cbrognara.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Camila Brognara</strong>
              <time title="08 de Agosto às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{countLike}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
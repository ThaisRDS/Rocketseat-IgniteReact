import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from '../Comment/Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false}
            src="https://github.com/ThaisRDS.png"
            />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thais Ribeiro</strong>
                            <time title='06 de Agosto ás 17:23' dateTime='2202-08-06 17:23'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}
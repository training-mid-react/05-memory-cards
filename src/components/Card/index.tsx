import { FC, MouseEventHandler, ReactElement } from "react"
import { FaQuestion } from "react-icons/fa6"
import './style.scss'

interface CardProps {
  icon: ReactElement,
  onClick: MouseEventHandler<HTMLElement>,
  isFlipped: boolean
}

export const Card: FC<CardProps> = ({ icon, onClick, isFlipped }) => {
  const innerClass = isFlipped ? 'card__inner card__inner--flipped' : 'card__inner'

  return (
    <article className="card" onClick={onClick}>
      <div className={innerClass}>
        <div className="card__front">
          <FaQuestion size={50} />
        </div>
        <div className="card__back">
          {icon}
        </div>
      </div>
    </article>
  )
}
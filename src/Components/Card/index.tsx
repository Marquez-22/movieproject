
import { ImgTexto } from "../ImgTexto"

type CardType = "Card1"
interface CardProps {
    type?: CardType
    img?: string
    text?: string
    number?: number
    titulodescription?: string
    textdescription?: string
}


export const Card = ({ titulodescription = "", textdescription = "", number = 0, text = "", img = "", type = "Card1" }: CardProps) => {
    return (<>
        <div className={`Card ${type}`}>
            <ImgTexto
                img={img}
                text={text}
                number={number}
                titulodescription={titulodescription}
                textdescription={textdescription}

            />

        </div>
    </>)
}
import { title } from "process"
import { Description } from "../Description"
import { Img } from "../Img"
import { Number } from "../Number"


type ImgTextoType = "Imgtexto1"

export interface ImgTextoProps {
    type?: ImgTextoType
    img?: string
    text?: string
    number?: number
    titulodescription?:string
    textdescription?:string


}

export const ImgTexto = ({ titulodescription="", textdescription="",number = 0, text = "", img = "", type = "Imgtexto1" }: ImgTextoProps) => {
    return (<>
        <div className={`ImgTexto ${type}`} >
            <Img url={img} className="img"></Img>
            <div className="textNumber">
                <div className="Text">{text}</div>
                <div className="Number">
                    <Number
                        number={number}
                    />
                  
                </div>
            </div>
           <div className="contentDescription">
           <Description
                    title={titulodescription}
                    text={textdescription}
                    
                   
                    
                    />
           </div>
        </div>
    </>)
}

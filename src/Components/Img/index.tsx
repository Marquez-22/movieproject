import { url } from "inspector"

type ImgType = "Img" | "Img"


interface ImgProps {
    type?: ImgType
    url?:string
    className?:string

}

export const Img = ({ url,type = "Img" }: ImgProps) => {
    return (<>
        <img src={url} 
        className={`img ${type}`}>

        </img>
    </>)




}








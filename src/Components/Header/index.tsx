import { InputSearch } from "../InputSearch"

type HeaderType = "Header1"
interface HeaderProps {
    type?: HeaderType
    
}

export const Header = ({ type = "Header1" }: HeaderProps) => {
    return (<>
        <div className={`Header ${type}`}>
            <InputSearch/>
            
        </div>
    </>)
}
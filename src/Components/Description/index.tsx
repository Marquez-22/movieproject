type DescriptionType = "Description1"
interface DescriptionProps {
    type?: DescriptionType
    text?:string
    title?:string

}

export const Description = ({ title="",text="",type = "Description1" }: DescriptionProps) => {
    return(<>
    <div className={`Description ${type}`}>
        <div className="title">
            {title}
        </div>
        <div className="text">
            {text}
        </div>



    </div>
    
    </>)
}
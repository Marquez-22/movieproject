type NumberType = "Number1"
interface NumberProps {
    type?: NumberType
    number:number
}

export const Number = ({ number=0,type = "Number1" }: NumberProps) => {
    const movieInfo =()=>{
        //vaibale number 0 - 10  ejm: 6.5 -> 6
        let numeroSinDecimales = Math.floor(number);
        return numeroSinDecimales
    }
    return (<>
        <div className={`Number ${type} valor-${movieInfo()}`}>
            {number}
        
        
        </div>


    </>)

}
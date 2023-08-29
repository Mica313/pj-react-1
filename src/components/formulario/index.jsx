import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o estado mudou');
        return () => {
            console.log('o componente finalizou');
        }
    }, [nome]);

    const alteraNome = (evento) => {
        setNome(evento.target.value)
    }

    const renderResult = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        if(media >= 7){
            return(
                <p>{nome} foi aprovado</p>
            )
        }else{
            return(
                <p>{nome} não foi aprovado</p>
            )
        }
    }

    return(
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <>
                <li key={item}>{item}</li>
                </>
            ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="nota Materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="nota Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="nota Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderResult()}
        </form>
    )
}
export default Formulario;
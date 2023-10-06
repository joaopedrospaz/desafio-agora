import { useState } from "react";
import './survey.css'

function Survey () {
    const [surveyData, setSurveyData] = useState({})
    const [countOption, setCountOption] = useState([])

    const handleChange = (e) => {
        setSurveyData({...surveyData, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        setCountOption([...countOption, (countOption.length + 4)])
    }

    return(
        <>
            <div className="container">
                <input className="theme" name="theme" type="text" placeholder="Tema" onChange={handleChange}/>
                <div className="options">
                    <input type="text" className="option" name="option1" placeholder="Opção 1" onChange={handleChange}/>
                    <input type="text" className="option" name="option2" placeholder="Opção 2" onChange={handleChange}/>
                    <input type="text" className="option" name="option3" placeholder="Opção 3" onChange={handleChange}/>
                    {
                        (countOption.length > 0) && (
                           countOption.map(option =>
                                    <div key={option} >
                                        < input type="text" className="option" name={`option${option}`} placeholder={`Opção ${option}`} onChange={handleChange}/>
                                    </div>
                                )
                        )
                    }
                    <button className="option" type="button" onClick={handleClick}>Mais opções</button>
                </div>
            
            </div>
        </>
    );
}

    export default Survey
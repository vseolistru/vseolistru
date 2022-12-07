import React, {useState} from 'react';


const FormLesson = () => {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const [checked, setChecked] = useState(false)
    const [radio, setRadio] = useState('')
    const [selected, setSelected] = useState('')
    const [text, setText] = useState('')
    const [defaultClass1, setDefault1] = useState('subscription__buttons-radio-not-clicked')
    const [defaultClass2, setDefault2] = useState('subscription__buttons-radio-not-clicked')
    const [defaultClass3, setDefault3] = useState('subscription__buttons-radio-not-clicked')

    const handlerSubmit = (e) => {
        e.preventDefault();
        setResult(input)
    }
    console.log(radio)
    console.log(selected)
    console.log(checked)

    const handlerCheck = (e) => {
        if (checked === false) {
            setChecked(true)
        }
        else {
            setChecked(false)
        }
    }

    const handlerRadio = (args) => {
        setRadio(args)
        if(defaultClass1 === "subscription__buttons-radio-not-clicked" && args === "JS") {
            setDefault1('subscription__buttons-radio-not-clicked clicked')
        }
        else {
            setDefault1("subscription__buttons-radio-not-clicked")
        }
        if(defaultClass2 === "subscription__buttons-radio-not-clicked" && args === "PHP") {
            setDefault2('subscription__buttons-radio-not-clicked clicked')
        }
        else {
            setDefault2("subscription__buttons-radio-not-clicked")
        }
        if(defaultClass3 === "subscription__buttons-radio-not-clicked" && args === "Python") {
            setDefault3('subscription__buttons-radio-not-clicked clicked')
        }
        else {
            setDefault3("subscription__buttons-radio-not-clicked")
        }
    }

    return (
        <div>

            <br/>
            <form className="subscription">
                <div className="subscription__field">
                    <input type="text" placeholder="Input Text" onChange={e=> setInput(e.target.value)}/>
                    <button onClick={handlerSubmit}>Send</button>
                </div>
                {input && <div className='subscription__text-input'>{input}</div>}
                <div className="subscription__buttons">
                    <div className="subscription__buttons-checkbox">
                        <label className="subscription__buttons-checkmark">
                            <input type="checkbox" name="condition" id="condition" checked={checked}
                                      onChange={handlerCheck}/> Agree with Terms
                        </label>
                    </div>
                </div>
                <div className='subscription__buttons-radio'>
                    <label htmlFor ="JS" className={defaultClass1}
                           onClick={()=>handlerRadio('JS')}>JS
                        <input type="radio" id="radio" name="JS" value='JS'
                               onChange={(e)=>setRadio(e.target.value)}/>
                    </label>
                    <label htmlFor ="PHP" className={defaultClass2}
                           onClick={()=>handlerRadio('PHP')}>PHP
                        <input type="radio" id="radio" name="JS" value='PHP'
                               onChange={(e)=>setRadio(e.target.value)}/>
                    </label>
                    <label htmlFor ="PY" className={defaultClass3}
                           onClick={()=>handlerRadio('Python')}>Python
                        <input type="radio" id="radio" name="JS" value='Python'
                               onChange={(e)=>setRadio(e.target.value)}/>
                    </label>
                </div>
                <div className="subscription__select">
                    <select name="select" onChange={e=>setSelected(e.target.value)}>
                        <option value="Adidas" name="Adidas" >Adidas</option>
                        <option value="Nike" >Nike</option>
                    </select>
                </div>
                <div className="subscription__textarea">
                    <textarea name="textarea" rows='5' cols='30' minLength='10' maxLength='100' value={text}
                              onChange={e=>setText(e.target.value)}>
                    Write something here
                    </textarea>
                </div>
                <p>TextArea next line - {text && text }</p>
                <p>{result}</p>
            </form>

        </div>
    );
};

export default FormLesson;
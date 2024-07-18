import {React,useState} from 'react'


const MultaRecisoria = () => {

    function handleClick(funcao){
        if(funcao === 'calcular'){
            return window['multa'].gerarMulta()
        }else if(funcao === 'copiar'){
            return window['copiarTexto']
        }
    }

    const [value, setValue] = useState('');

    const formatCurrency = (inputValue) => {
        const numericValue = inputValue.replace(/\D/g, '').replace(/^0+/, '');
        const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        numericValue / 100
        );
        setValue(formattedValue);
    };

    const handleInputChange = (e) => {
        formatCurrency(e.target.value);
    };

    return (
        <div className="my-login-page">
            <section className="h-100">
                <div className="container h-100">
                <div className="row justify-content-center h-100" >
                    <div className="card-wrapper">
                    <div className="card fat">
                        <div className="card-body" >
                        <h4 className="card-title d-flex justify-content-center">MULTA RESCISÓRIA</h4>
                        <hr />
                        <div className="my-login-validation">

                            <div className='row'>

                                <div className='col-6'>
                                    <div className="form-group mt-3">
                                        <label htmlFor="data">DATA VENDA</label>
                                        <input id="data" type="date" className="form-control" name="data" required defaultValue/>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div className="form-group mt-3">
                                        <label htmlFor="data">DATA CANCELAMENTO</label>
                                        <input id="dataCancelamento" type="date" className="form-control" name="dataCancelamento" required defaultValue/>
                                    </div>
                                </div>
                                
                                <div className='col-6'>
                                    <div className="form-group mt-3">
                                        <label htmlFor="valor">VALOR DO BENEFÍCIO</label>
                                        <input type="text" id="valor"  className="form-control" value={value} onChange={handleInputChange} />
                                    
                                    </div>
                                </div>
                               
                            </div>

                            {/* <div className='row mt-3'>
                                <small className='text-muted '>OBS: Verificar se teve troca de plano e confirmar o valor base, confirmar o valor da taxa de adesão e contar a quantidade de mensalidades pagas</small>
                            </div> */}
                            <div className="form-group mt-3">
                            <textarea className="form-control" id="mensagem" rows={10} defaultValue={""} />
                            </div>
                            <div className="form-group">
                            <button onClick={()=>handleClick('calcular')} type="button" className="btn btn-primary btn-block w-100 mt-3">
                                Calcular
                            </button>
                            <input id='copiar'  type="button" className="btn btn-secondary btn-block w-100 mt-2" onClick={handleClick('copiar')} defaultValue="Copiar" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default MultaRecisoria
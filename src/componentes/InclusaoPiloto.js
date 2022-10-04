const InclusaoPiloto=()=>{

    return(

          <div className="container">

             <h4 className="fst-italic mt-3">Novo Piloto</h4>

             <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="nome" placeholder="nome completo" required autoFocus/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="matricula" placeholder="matrícula" required/>
                  </div>

                  <input type="submit" className="btn btn-primary mt-3" value="Enviar"/>
                  <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar"/>
             </form>
             <div className="alert"></div>


          </div>



    );
};
export default InclusaoPiloto;
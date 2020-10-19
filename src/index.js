import React, { Component } from 'react';
import $ from 'jquery';

import TextoLibre from './components/TextoLibre';
import TextoLibreMemo from './components/TextoLibreMemo';
import TextoFormatoEmail from './components/TextoFormatoEmail';
import Numerico from './components/Numerico';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        form_id: 1,
        form_name: "",
        form_max: ""
      },
      seccions: [
        {
          seccion_id: 1,
          seccion_name: "",
          form_id: 1,
        }
      ],
      components: [],
      componentName: ""
    }
    
    this.addSeccion = this.addSeccion.bind(this);
    this.addComponents = this.addComponents.bind(this);
    this.componentRender = this.componentRender.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);

  }

  addSeccion() {

    const count = this.state.seccions.length + 1;
    const obj = {
      seccion_id: count,
      seccion_name: "",
      form_id: 1
    };
    const seccions = this.state.seccions.concat(obj)
    this.setState({
      seccions,
    })

  }

  addComponents(seccion_id) {

    const count = this.state.components.length + 1;
    const obj = {
      component_id: count,
      seccion_id,
      form_id: 1,
      component_name: "",
      component_description: "" 
    };

    const components = this.state.components.concat(obj);

    this.setState({
      components,
    })

  }

  componentDidMount() {
    $('.dropdown-toggle').dropdown()
  }

  componentRender(comp) {

    switch(comp) {
      case 'tl':
        return <TextoLibre />;
      case 'tlm':
        return <TextoLibreMemo />;
      case 'tfe':
        return <TextoFormatoEmail />;
      case 'nu':
        return <Numerico />;
      default:
        console.log('default')
    }

  }
  
  handleChangeForm(e) {

    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      form: Object.assign({}, this.state.form, {
        [name]: value
      })
    })
    
  }

  handleChangeSeccion(e) {

    const i = e.target.getAttribute('data-index');
    const id = e.target.getAttribute('data-seccion');

    const obj = Object.assign({}, this.state.seccions[i], {
      [e.target.name]: e.target.value
    });

    this.setState({
      seccions: this.state.seccions.map(el => (el.seccion_id == id ? obj : el) ) 
    })
    

  }

  render(){
    const totalSeccion = this.state.seccions.length;
    const comp = this.state.componentName;
    return(
      <section className="container">
        <p>Formularios Dinámicos:</p>

        <div className="form-row mb-3">

          <div className="col-6">
            <input
              name="form_name" 
              type="text" 
              className="form-control form-control-sm" 
              placeholder="Nombre del formulario" 
              onChange={this.handleChangeForm}
              value={this.state.form.name}
            />
          </div>

          <div className="col-2">
            <input 
              name="form_max" 
              type="text" 
              className="form-control form-control-sm" 
              placeholder="Máx." 
              onChange={this.handleChangeForm}
              value={this.state.form.max}
            />
          </div>

          <div className="col-4">
          </div>

        </div>

        <button className="btn btn-danger btn-sm" onClick={this.addSeccion}>Nueva Sección</button>

        {this.state.seccions.map((s, key) => {
          return (
            <div key={key} className="card mt-5">
              <div className="card-header">
                Sección: {s.seccion_id}/{totalSeccion}
                <span className="float-right">Componentes: </span>
              </div>
              <div className="card-body">

                <div className="form-row border-bottom">

                  <div className="form-group col-md-6">
                    <input 
                      type="text" 
                      className="form-control form-control-sm" 
                      id="inputSeccion" 
                      placeholder="Nombre de la sección"
                      data-index={key}
                      data-seccion={s.seccion_id}
                      onChange={(e) => this.handleChangeSeccion(e)}
                      value={s.name}
                      name="seccion_name"
                    />
                  </div>

                  <div className="form-group col-md-2 offset-md-4 text-center">
                    <button type="button" className="btn btn-outline-secondary btn-sm mr-1" onClick={() => {this.addComponents(s.seccion_id)}}>co</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm">ac</button>
                  </div>

                </div>

                {this.state.components.map((c, key) => {
                  if(c.seccion_id == s.seccion_id ) {
                    return(
                      <div key={key} className="container border mt-3 pt-2 pb-2">
                      
                        <div className="row">
                          <div className="col-md-10">
                          
                            <div className="dropdown">
                              <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuComponent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tipos de Componentes
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuComponent">
                                <a className="dropdown-item" href="#" onClick={() => this.setState({component: "tl"})}>Texto Libre</a>
                                <a className="dropdown-item" href="#" onClick={() => this.setState({component: "tlm"})}>Texto Libre Memo</a>
                                <a className="dropdown-item" href="#" onClick={() => this.setState({component: "tfe"})}>Texto Libre Email</a>
                                <a className="dropdown-item" href="#" onClick={() => this.setState({component: "nu"})}>Númerico</a>
                              </div>
                            </div>

                          </div>
                          <div className="col-md-2 text-right">
                            <button type="button" className="btn btn-outline-secondary btn-sm">dl</button>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            {this.componentRender(comp)}
                          </div>
                        </div>
                      
                      </div>
                    )
                  }
                  
                })}

              </div>
            </div>
          )
        })}
      <br />
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </section>
    )
  }
}

export default App;
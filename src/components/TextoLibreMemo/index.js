import React, { Component } from 'react';

class TextLibreMemo extends Component {
  constructor() {
    super();
    this.state = {
      configVisible: false
    }

    this.openConfig = this.openConfig.bind(this);
  }

  openConfig() {
    this.setState({
      configVisible: !this.state.configVisible
    })
  }

  render() {
    const visible = this.state.configVisible;
    let classConfig = "btn btn-outline-secondary btn-sm";
    if (visible) classConfig += " active";
    return (
      <div className="row mt-4">
        <div className="col">
          <input type="text" className="form-control form-control-sm" placeholder="Nombre" />
        </div>
        <div className="col">
          <input type="text" className="form-control form-control-sm" placeholder="Descripción" />
        </div>
        <div className="col-12 border-top mt-3 pt-2">
          <button type="button" className={classConfig} onClick={this.openConfig}>Configuraciones</button>
        </div>
        {visible && (
          <div className="col-12 mt-2 p-0">
            <div className="header-config p-2">
              Validaciones WEB/MOVIL
            </div>
            <div className="body-config p-3">
              <span className="font-weight-bold">Texto:</span>
              <div className="row">
                <div className="col-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                    <label className="form-check-label" for="defaultCheck2">
                      Contiene
                    </label>
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                    <label className="form-check-label" for="defaultCheck3">
                      No Contiene
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <input type="text" className="form-control form-control-sm" placeholder="Mensaje de validación" />
                </div>
              </div>
            </div>
            <div className="header-config p-2">
              Permisos
            </div>
            <div className="body-config p-3">
              <div className="row">
                <div className="col">

                  <div className="row">

                    <div className="col-4">
                      <span className="font-weight-bold">Visible:</span>
                    </div>

                    <div className="col-8">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" for="inlineCheckbox1">Web</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" for="inlineCheckbox2">Movil</label>
                      </div>
                    </div>
                
                  </div>

                  <div className="row">
                  
                    <div className="col-4">
                      <span className="font-weight-bold">Editable:</span>
                    </div>

                    <div className="col-8">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" for="inlineCheckbox3">Web</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
                        <label className="form-check-label" for="inlineCheckbox4">Movil</label>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col">
                  <div className="row">

                    <div className="col-5">
                      <span className="font-weight-bold">Requerido:</span>
                    </div>

                    <div className="col-7">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
                        <label className="form-check-label" for="inlineCheckbox5">Web</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6" />
                        <label className="form-check-label" for="inlineCheckbox6">Movil</label>
                      </div>
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-5">
                      <span className="font-weight-bold">SoloLectura:</span>
                    </div>
                    <div className="col-7">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7" />
                        <label className="form-check-label" for="inlineCheckbox7">Web</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8" />
                        <label className="form-check-label" for="inlineCheckbox8">Movil</label>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    )
  }
}

export default TextLibreMemo;
import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      mensagem: ""
    };

    this.alterarEmail = this.alterarEmail.bind(this);
    this.alterarSenha = this.alterarSenha.bind(this);
    this.validarLogin = this.validarLogin.bind(this);
  }

  alterarEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  alterarSenha(event) {
    this.setState({
      senha: event.target.value
    });
  }

  validarLogin() {

    if (
      this.state.email === "eduardo.lino@pucpr.br" &&
      this.state.senha === "123456"
    ) {

      this.setState({
        mensagem: "Acessado com sucesso!"
      });

    } else {

      this.setState({
        mensagem: "Usuário ou senha incorretos!"
      });

    }

  }

  render() {

    return (
      <div className="container">

        <h1>Login</h1>

        <input
          type="email"
          value={this.state.email}
          onChange={this.alterarEmail}
        />

        <br />

        <input
          type="password"
          value={this.state.senha}
          onChange={this.alterarSenha}
        />

        <br />

        <button onClick={this.validarLogin}>
          Acessar
        </button>

        <br />

        <p>{this.state.mensagem}</p>

      </div>
    );

  }

}

export default App;
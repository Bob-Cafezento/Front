<script>
import axios from "axios";
export default {
  data() {
    return {
      auth: {},
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await axios.post("https://successstudent.pythonanywhere.com/auth/registration/", this.auth);
        alert("Usuario criado com sucesso");
      } catch (e) {
        alert("Algum erro");
      }
    },
  },
};
</script>

<template>
  <div class="body">
    <div class="container">
      <div class="header">
        <h2>Crie uma conta no Success Student</h2>
      </div>

      <form id="form" class="form">
        <div class="form-control">
          <label for="username">Nome da conta</label>
          <input
            type="text"
            v-model="auth.username"
            id="username"
            placeholder="Digite seu username"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="email">E-mail</label>
          <input
            type="text"
            v-model="auth.email"
            id="email"
            placeholder="Digite seu E-mail"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="password">Senha</label>
          <input
            type="password"
            v-model="auth.password1"
            id="password"
            placeholder="Digite sua senha"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="password">Confirme a sua senha</label>
          <input
            type="password"
            v-model="auth.password2"
            id="password"
            placeholder="Confirme a sua senha"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <button type="submit" class="botao" @click="criarUsuario">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.body {
  width: 100%;
  min-height: 100vh;
  background: url(@/assets/imagens/grupo-de-estudo-ConversImagem.jpg) no-repeat
    center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  opacity: 0.9;
}

.container {
  background-color: #3b6863;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 100%;
  overflow: hidden;
}

.header {
  background-color: #eee;
  padding: 20px;
  color: #000000;
}

.form {
  padding: 20px;
}

.form-control {
  padding-bottom: 10px;
  position: relative;
}

.form-control label {
  display: inline-block;
}

.form-control input {
  border: 2px solid #f0f0f0;
  display: block;
  border-radius: 10px;
  font-size: 14px;
  width: 100%;
  padding: 10px;
}

.form-control i {
  position: absolute;
  top: 45px;
  right: 10px;
  visibility: hidden;
}

.form-control small {
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.form button {
  background-color: #8f8f8f;
  border: 2px solid #8f8f8f;
  color: #fff;
  font-size: 14px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}

/* Error and Success */
.form-control.success input {
  border-color: #2ecc71;
}

.form-control.error input {
  border-color: #e74c3c;
}

.form-control.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control.error small {
  visibility: visible;
  color: #e74c3c;
}
.form button:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

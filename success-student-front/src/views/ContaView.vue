<template>
    <div id="abrangent">
        <main id="conta">
            <img src="@/assets/imagens/CONTA.png" width="200">
            Tenha controle da sua conta<br>
            <h2>Altere seu email</h2>
            <div class="box" >
                Coloque a sua senha
                <input type="password">
                Coloque seu novo email
                <input type="email">
            </div>
            <h2>Altere seu nome</h2>
            <div class="box">
                Coloque sua senha
                <input type="password">
                Coloque seu novo nome 
                <input type="text">
            </div>
            <h2>Altere sua senha</h2>
            <div class="box">
                Coloque a sua senha antiga
                <input type="password">

                Coloque a sua senha nova
                <input type="password">
                <input type="checkbox">
            </div>
            <h2>Apague sua conta</h2>
            <div class="box">
                Coloque a sua senha e confirme
                <input type="password">
                <input type="checkbox">
            </div>
        </main>
    </div>
</template>

<style scoped>
	.img{
		z-index: 1;
	}
  .box{
    background-color: var(--branco-esverdeado);
    font-size: 35px;
    border-radius: 10px;
    text-align: center;
    padding: 3%;
    margin: 1%;
    width: 30%;
    height: 5%;
  }
</style>
<template>
    <div id="abrangent">
        <main id="conta">
            <div class="big-box-conta">
                <img src="@/assets/imagens/CONTA.png" width="200">
                Tenha controle da sua conta
            </div>

            <div class="big-box">
                <h2>Altere seu email</h2>
                <div class="box">
                    Coloque a sua senha
                    <input type="password">
                    Coloque seu novo email
                    <input type="email">
                </div>
            </div>

            <div class="big-box">
                <h2>Altere seu nome</h2>
                <div class="box">
                    Coloque sua senha
                    <input type="password">
                    Coloque seu novo nome 
                    <input type="text">
                </div>
            </div>

            <div class="big-box">
                <h2>Altere sua senha</h2>
                <div class="box">
                    Coloque a sua senha antiga
                    <input type="password">

                    Coloque a sua senha nova
                    <input type="password">
                    <input type="checkbox">
                </div>
            </div>

            <div class="big-box">
                <h2>Apague sua conta</h2>
                <div class="box">
                    Coloque a sua senha e confirme
                    <input type="password">
                    <input type="checkbox">
                </div>
            </div>

        </main>
    </div>
</template>

<style scoped>

  .box{
    background-color: var(--branco-esverdeado);
    font-size: 35px;
    border-radius: 10px;
    text-align: center;
    padding: 3%;
    margin: 1%;
    width: 100%;
    height: 5%;
  }
  .big-box-conta{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 70px;
  }
  .big-box{
      width: 30%;
      padding: 2%;
      display: flex;
      flex-flow: column;
      margin-left: 5%;
  }

  h2{
    font-size: 40px;
  }

</style>
<template>
  <h1>SUCCESS STUDENT</h1>
    <div id="abrangent">
        <main>

            <div class="box" @click="$router.push('/adicao')">
                <img src="@/assets/imagens/Adição.png" width="180"><br>
                Adição
            </div>

            <div class="box" @click="$router.push('/subtracao')">
                <img src="@/assets/imagens/Subtração.png" width="310"><br>
                Subtração
            </div>

            <div class="box" @click="$router.push('/multiplicacao')">
                <img src="@/assets/imagens/Multiplicação.png" width="178"><br>
                Multiplicação
            </div>

            <div class="box" @click="$router.push('/divisao')">
                <img src="@/assets/imagens/divisão.png" width="280"><br>
                Divisão
            </div>

        </main>
    </div>
</template>

<style scoped>
    .box img {
        width: 100;
    }
</style>

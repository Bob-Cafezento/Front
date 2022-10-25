<script>

</script>

<template>
    <!--Aqui nós temos o resto do conteúdo-->
    <h1>
        SUCCESS STUDENT
    </h1>
    <div id="abrangent">
        <main>
            <div class="box" @click="$router.push('/linguagens')">
                <img src="@/assets/imagens/Linguagens.png">
                Português
            </div>
            <div class="box" @click="$router.push('/matematica')">
                <img src="@/assets/imagens/Esquadro.png">
                Matemática
            </div>
            <div class="box" @click="$router.push('/historia')">   
                <img src="@/assets/imagens/Ampulheta.png"><br>
                História
            </div>
            <div class="box" @click="$router.push('/geografia')">
                <img src="@/assets/imagens/geografia.png" >
                Geografia
            </div>
        </main>
    </div>
</template>

<style scoped>
.box img {
    height: 200px;
}
</style>
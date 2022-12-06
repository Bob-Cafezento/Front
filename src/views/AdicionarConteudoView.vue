<script>

export default {
  data() {
    return {
      titulo: "",
      paragrafo: "",
    };
  },

}
</script>


<template>
    <div id="abrangent">
    <main>
        <div class="box">
            Adicione um título<br/>
            <input type="text" v-model="titulo"/><br/>
        </div><br />
        <div class="box">
            Adicione um Paragráfo<br/>
            <textarea v-model="paragrafo" wrap="hard" class="paragrafo"></textarea><br/>
        </div>
        <div class="box" @click="$router.push('/adicionarformulario')">
            Deseja adicionar um formulário ao seu conteúdo?
            
        </div>
        
    </main>
    <main class="resumo">
            <h1>{{ titulo }}</h1> <br>
            <p><i><b>{{ paragrafo }}</b></i></p>
    </main>
    </div>
</template>

<style scoped>
    .box{
        width: 100%;
        
    }

    .resumo{
        white-space: pre-line;
    }
</style>
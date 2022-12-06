<template>
    <div id="abrangent">
        <main>

            <div class="box">
                Selecione qual será a disciplina do conteúdo que você deseja adicionar ao site:<br>
                <select name="select">
                        <option value="valor1" selected>Português</option>
                        <option value="valor2">Matemática</option>
                        <option value="valor3">Historia</option>
                        <option value="valor3">Geografia</option>
                    </select><br>
                Adicione um título<br>
                <input type="text" v-model="titulo"/><br>
                Adicione um Paragráfo<br>
                <textarea v-model="paragrafo" wrap="hard" class="paragrafo"></textarea><br>
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

<style scoped>
    .box{
        width: 100%;
    }
    .resumo{
        white-space: pre-line;
    }
</style>
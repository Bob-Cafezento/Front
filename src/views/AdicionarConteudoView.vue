<template>
    <h1>SUCCESS STUDENT</h1>
    <div id="abrangent">
        
        <main>
            <p><h2>Adicione conteúdo</h2></p><br>
            <h3>Nesta página escreva um novo resumo, e informe a que matéria o mesmo pertence:</h3><br>
            <div class="box">
                <h3>Selecione qual será a disciplina do conteúdo que você deseja adicionar ao site:</h3><br>
                <select>
                        <option value="valor" selected></option>
                        <option value="valor1">Português</option>
                        <option value="valor2">Matemática</option>
                        <option value="valor3">História</option>
                        <option value="valor4">Geografia</option>
                    </select><br>
                <h3>Adicione um título</h3><br>
                <input type="text" v-model="conteudo.titulo"/><br>
                <h3>Adicione um Paragráfo</h3><br>
                <textarea v-model="conteudo.paragrafo" wrap="hard"></textarea><br>
            </div>

            <div class="box" @click="$router.push('/adicionarformulario')">
                Clique aqui para adicionar um formulário ao seu conteúdo <br>
            </div>

        </main>

    <h1> 
        Visão Prévia do conteúdo
    </h1>

        <main class="resumo">
                <h1 class="titulo">{{ conteudo.titulo }}</h1> <br>
                <h4 class="paragrafo">{{ conteudo.paragrafo }}</h4>
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      conteudo: {},
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
    .titulo{
        font-size: 50px;
    }
    .paragrafo{
        font-size: 35px;
    }
    h1{
        padding: 0;
        margin-top: 20px;
    }
    select{
        width: 400px;
        height: 50px;
        border: none;
        font-family: Garamond;
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 2px 20px var(--preto-claro);
    };
    select:hover{
        box-shadow: 0 4px 60px var(--preto-claro);
    }
    input{
        width: 400px;
        height: 50px;
        border: none;
        border-radius: 10px;
        font-family: Garamond;
        font-size: 30px;
        margin-bottom: 20px;
        box-shadow: 0 2px 20px var(--preto-claro);
    }
    input:hover{
        box-shadow: 0 4px 60px var(--preto-claro);
    }
    textarea{
        width: 1000px;
        height: 100px;
        border-radius: 10px;
        font-family: Garamond;
        font-size: 30px;
        box-shadow: 0 4px 20px var(--preto-claro);
    }
    textarea:hover{
        box-shadow: 0 4px 60px var(--preto-claro);
    }
</style>
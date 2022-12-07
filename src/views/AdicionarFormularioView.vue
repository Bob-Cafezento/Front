<template>
    <h1>SUCCESS STUDENT</h1>
    <div id="abrangent">
        <main>
            <div class="box">
                Adicione um Título para este Formulário<br>
                <input id="text" type="text" v-model="formulario.titulo">
            </div>
            <div class="box">
                Adicione a primeira pergunta<br>
                <textarea type="text" v-model="formulario.pergunta1"></textarea><br>

                Adicione as alternativas<br>
                <input id="text" type="text" v-model="formulario.alternativa1"><br>
                <input id="text" type="text" v-model="formulario.alternativa2"><br>
                <input id="text" type="text" v-model="formulario.alternativa3"><br>
                <input id="text" type="text" v-model="formulario.alternativa4"><br>

                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
            </div>
            <div class="box">
                Adicione a segunda pergunta<br>
                <textarea type="text" v-model="formulario.pergunta2"></textarea><br>

                Adicione as alternativas<br>
                <input id="text" type="text" v-model="formulario.alternativa5"><br>
                <input id="text" type="text" v-model="formulario.alternativa6"><br>
                <input id="text" type="text" v-model="formulario.alternativa7"><br>
                <input id="text" type="text" v-model="formulario.alternativa8"><br>

                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
            </div>
            <div class="box">
                Adicione a terceira pergunta<br>
                <textarea type="text" v-model="formulario.pergunta3"></textarea><br>

                Adicione as alternativas<br>
                <input id="text" type="text" v-model="formulario.alternativa9"><br>
                <input id="text" type="text" v-model="formulario.alternativa10"><br>
                <input id="text" type="text" v-model="formulario.alternativa11"><br>
                <input id="text" type="text" v-model="formulario.alternativa12"><br>

                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
            </div>
            <div class="box">
                Adicione a quarta pergunta<br>
                <textarea type="text" v-model="formulario.pergunta4"></textarea><br>

                Adicione as alternativas<br>
                <input id="text" type="text" v-model="formulario.alternativa13"><br>
                <input id="text" type="text" v-model="formulario.alternativa14"><br>
                <input id="text" type="text" v-model="formulario.alternativa15"><br>
                <input id="text" type="text" v-model="formulario.alternativa16"><br>

                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
            </div>
            <div class="box">
                Adicione a quinta pergunta <br>
                <textarea type="text" v-model="formulario.pergunta5"></textarea><br>

                Adicione as alternativas<br>
                <input id="text" type="text" v-model="formulario.alternativa17"><br>
                <input id="text" type="text" v-model="formulario.alternativa18"><br>
                <input id="text" type="text" v-model="formulario.alternativa19"><br>
                <input id="text" type="text" v-model="formulario.alternativa20"><br>

                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select><br>
            </div>
            <div class="box">
                Quando o Formulário e o conteúdo estiverem prontos, clique abaixo para salvar:<br>
                <input type="submit" class="submit">
            </div>
        </main>

    <h1> Visão Prévia do formulário</h1>

        <main class="resumo">
            <h1 class="titulo">{{ formulario.titulo }}</h1> <br>
            <!--Primeira pergunta-->
            {{ formulario.pergunta1 }}<br>
            <div><input type="radio" class="radio" name="Pergunta1" value="">{{ formulario.alternativa1 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta1" value="">{{ formulario.alternativa2 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta1" value="">{{ formulario.alternativa3 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta1" value="">{{ formulario.alternativa4 }}</div><br>
            <!--Segunda pergunta-->
            {{ formulario.pergunta2 }}<br>
            <div><input type="radio" class="radio" name="Pergunta2" value="">{{ formulario.alternativa5 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta2" value="">{{ formulario.alternativa6 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta2" value="">{{ formulario.alternativa7 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta2" value="">{{ formulario.alternativa8 }}</div><br>
            <!--Terceira pergunta-->
            {{ formulario.pergunta3 }}<br>
            <div><input type="radio" class="radio" name="Pergunta3" value="">{{ formulario.alternativa9 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta3" value="">{{ formulario.alternativa10 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta3" value="">{{ formulario.alternativa11 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta3" value="">{{ formulario.alternativa12 }}</div><br>
            <!--Quarta pergunta-->
            {{ formulario.pergunta4 }}<br>
            <div><input type="radio" class="radio" name="Pergunta4" value="">{{ formulario.alternativa13 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta4" value="">{{ formulario.alternativa14 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta4" value="">{{ formulario.alternativa15 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta4" value="">{{ formulario.alternativa16 }}</div><br>
            <!--Segunda pergunta-->
            {{ formulario.pergunta5 }}<br>
            <div><input type="radio" class="radio" name="Pergunta5" value="">{{ formulario.alternativa17 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta5" value="">{{ formulario.alternativa18 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta5" value="">{{ formulario.alternativa19 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta5" value="">{{ formulario.alternativa20 }}</div><br>
        </main>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      formulario: {},
    };
  },
}
</script>

<style scoped>
    .resumo{
        display: flex;
        align-items: flex-start;
        white-space: pre-line;
    }
    .box{
        width: 100%;
    }
    .titulo{
        font-size: 50px;
    }
    .submit{
        background-color: rgb(18, 151, 177)
    }
   
    h1{
        padding: 0;
        margin-top: 20px;
    }
    h3{
        margin-top: 0;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 2px 20px var(--preto-claro);
    }
    select{
        margin-top: 20px;
        width: 400px;
        height: 50px;
        border: none;
        font-family: Garamond;
        font-size: 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 2px 20px var(--preto-claro);
    }
    select:hover{
        box-shadow: 0 4px 60px var(--preto-claro);
    }
    input{
        margin-bottom: 20px;
        margin-top: 20px;
        width: 400px;
        height: 40px;
        border: none;
        border-radius: 10px;
        font-family: Garamond;
        font-size: 30px;
        box-shadow: 0 2px 20px var(--preto-claro);
    }
    input#text:hover{
        box-shadow: 0 4px 40px var(--preto-claro);
    }
    .radio{
        margin-left: 50px;
        size-adjust: border;
        width: 42px;
        margin-top: 0;
        border: none;
        border-radius: 10px;
        font-family: Garamond;
        font-size: 30px;
        box-shadow: none;
    }

    textarea{
        margin: 30px;
        width: 60%;
        height: 200px;
        border-radius: 10px;
        font-family: Garamond;
        font-size: 20px;
        box-shadow: 0 4px 20px var(--preto-claro);
    }
    textarea:hover{
        box-shadow: 0 4px 60px var(--preto-claro);
    }
    body::-webkit-scrollbar {
        width: 15px;    
    }

    body::-webkit-scrollbar-track {
        background: var(--branco-esverdeado);
        border-left: 1px solid var(--preto-claro);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--verde-claro);    
        border-radius: 7px;       
        border: 2px solid var(--preto-claro);
    }
</style>
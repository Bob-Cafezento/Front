<template>
    <h1>SUCCESS STUDENT</h1>
    <div id="abrangent">
        <main>
            <div class="box">
                Adicione um Título para este Formulário<br>
                <input type="text" v-model="formulario.titulo">
            </div>
            <div class="box">
                Adicione a primeira pergunta<br>
                <textarea type="text" v-model="formulario.pergunta1"></textarea><br>

                Adicione as alternativas<br>
                <input type="text" v-model="formulario.alternativa1"><br>
                <input type="text" v-model="formulario.alternativa2"><br>
                <input type="text" v-model="formulario.alternativa3"><br>
                <input type="text" v-model="formulario.alternativa4"><br>

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
                <input type="text" v-model="pergunta2"><br>

                Adicione as alternativas<br>
                <input type="text" v-model="formulario.alternativa5"><br>
                <input type="text" v-model="formulario.alternativa6"><br>
                <input type="text" v-model="formulario.alternativa7"><br>
                <input type="text" v-model="formulario.alternativa8"><br>

                Coloque qual das alternativas é a correta:<br><br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
            </div>
            <div class="box">
                Adicione a terceira pergunta<br>
                <input type="text" v-model="formulario.pergunta3"><br>

                Adicione as alternativas<br>
                <input type="text" v-model="formulario.alternativa9"><br>
                <input type="text" v-model="formulario.alternativa10"><br>
                <input type="text" v-model="formulario.alternativa11"><br>
                <input type="text" v-model="formulario.alternativa12"><br>

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
                <input type="text" v-model="formulario.pergunta4"><br>

                Adicione as alternativas<br>
                <input type="text" v-model="formulario.alternativa13"><br>
                <input type="text" v-model="formulario.alternativa14"><br>
                <input type="text" v-model="formulario.alternativa15"><br>
                <input type="text" v-model="formulario.alternativa16"><br>

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
                <input type="text" v-model="formulario.pergunta5"><br>

                Adicione as alternativas<br>
                <input type="text" v-model="formulario.alternativa17"><br>
                <input type="text" v-model="formulario.alternativa18"><br>
                <input type="text" v-model="formulario.alternativa19"><br>
                <input type="text" v-model="formulario.alternativa20"><br>

                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
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
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa5 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa6 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa7 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa8 }}</div><br>
            <!--Terceira pergunta-->
            {{ formulario.pergunta3 }}<br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa9 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa10 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa11 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa12 }}</div><br>
            <!--Quarta pergunta-->
            {{ formulario.pergunta4 }}<br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa13 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa14 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa15 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa16 }}</div><br>
            <!--Segunda pergunta-->
            {{ formulario.pergunta5 }}<br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa17 }}<br></div>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa18 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa19 }}</div><br>
            <div><input type="radio" class="radio" name="Pergunta" value="">{{ formulario.alternativa20 }}</div><br>
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
    .box{
        width: 100%;
    }
    .resumo{
        white-space: pre-line;
    }
    .titulo{
        font-size: 50px;
    }
    h1{
        padding: 0;
        margin-top: 20px;
    }
    h3{
        margin-top: 20px;
        padding-bottom: 20px;
    }
    h4{
        font-family: garamond;
        font-size: 30px;
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
    .radio{
        size-adjust: border;
        width: 42px;
        margin: 0;
        border: none;
        border-radius: 10px;
        font-family: Garamond;
        font-size: 30px;
        box-shadow: none;
    }

    input:hover{
        box-shadow: 0 4px 60px var(--preto-claro);
    }
    .radio:hover{
        border-radius: 100%;
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
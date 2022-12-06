<template>
    <div id="abrangent">
        <main>
            <div class="box">
                Adicione um Título para este Formulário<br>
                <input type="text" v-model="titulo">
            </div>
            <div class="box">
                Adicione a primeira pergunta<br>
                <input type="text" v-model="pergunta1"><br>
                Adicione as alternativas<br>
                <input type="text" v-model="alternativa11"><br>
                <input type="text" v-model="alternativa12"><br>
                <input type="text" v-model="alternativa13"><br>
                <input type="text" v-model="alternativa14"><br>
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
                <input type="text" v-model="alternativa21"><br>
                <input type="text" v-model="alternativa22"><br>
                <input type="text" v-model="alternativa23"><br>
                <input type="text" v-model="alternativa24"><br>
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
                <input type="text" v-model="pergunta3"><br>
                Adicione as alternativas<br>
                <input type="text" v-model="alternativa31"><br>
                <input type="text" v-model="alternativa32"><br>
                <input type="text" v-model="alternativa33"><br>
                <input type="text" v-model="alternativa34"><br>
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
                <input type="text" v-model="pergunta4"><br>
                Adicione as alternativas<br>
                <input type="text" v-model="alternativa41"><br>
                <input type="text" v-model="alternativa42"><br>
                <input type="text" v-model="alternativa43"><br>
                <input type="text" v-model="alternativa44"><br>
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
                <input type="text" v-model="pergunta5"><br>
                Adicione as alternativas<br>
                <input type="text" v-model="alternativa51"><br>
                <input type="text" v-model="alternativa52"><br>
                <input type="text" v-model="alternativa53"><br>
                <input type="text" v-model="alternativa54"><br>
                Coloque qual das alternativas é a correta:<br>
                <select name="select">
                    <option value="valor1" selected>Alternativa 1</option>
                    <option value="valor2" >Alternativa 2</option>
                    <option value="valor3">Alternativa 3</option>
                    <option value="valor3">Alternativa 4</option>
                </select>
            </div>
        </main>
        <main class="resumo">
            <h1>{{ titulo }}</h1> <br>
            <!--Primeira pergunta-->
            {{ pergunta1 }}<br>
            <input type="radio" name="Pergunta1" value="">{{ alternativa11 }}<br>
            <input type="radio" name="Pergunta1" value="">{{ alternativa12 }}<br>
            <input type="radio" name="Pergunta1" value="">{{ alternativa13 }}<br>
            <input type="radio" name="Pergunta1" value="">{{ alternativa14 }}<br>
            <!--Segunda pergunta-->
            {{ pergunta2 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa21 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa22 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa23 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa24 }}<br>
            <!--Terceira pergunta-->
            {{ pergunta3 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa31 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa32 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa33 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa34 }}<br>
            <!--Quarta pergunta-->
            {{ pergunta4 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa41 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa42 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa43 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa44 }}<br>
            <!--Segunda pergunta-->
            {{ pergunta5 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa51 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa52 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa53 }}<br>
            <input type="radio" name="Pergunta" value="">{{ alternativa54 }}<br>
        </main>
    </div>
</template>

<script>

export default {
  data() {
    return {
      titulo: "",
      pergunta1: "",
      alternativa11: "",
      alternativa12: "",
      alternativa13: "",
      alternativa14: "",
      alternativacerta1: "",
      pergunta2: "",
      alternativa21: "",
      alternativa22: "",
      alternativa23: "",
      alternativa24: "",
      alternativacerta2: "",
      pergunta3: "",
      alternativa31: "",
      alternativa32: "",
      alternativa33: "",
      alternativa34: "",
      alternativacerta3: "",
      pergunta4: "",
      alternativa41: "",
      alternativa42: "",
      alternativa43: "",
      alternativa44: "",
      alternativacerta4: "",
      pergunta5: "",
      alternativa51: "",
      alternativa52: "",
      alternativa53: "",
      alternativa54: "",
      alternativacerta5: "",
    };
  },

}
</script>

<style scoped>
    .box {
        width: 100%
    }
</style>
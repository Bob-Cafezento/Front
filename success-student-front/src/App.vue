<script setup>
</script>

<template>
  <header>
    <RouterLink to="/" id="header">
      <img src="@/assets/imagens/logo-branca.png" title="Logo" width="125" />
    </RouterLink>

    <div class="header-item">
      <RouterLink id="cabecalho" to="/login">Login</RouterLink>
    </div>
    <div class="header-item">
      <RouterLink id="cabecalho" to="/cadastro">Cadastro</RouterLink>
    </div>

    <div class="header-item">
      <RouterLink id="cabecalho" to="/conta">Conta</RouterLink>
    </div>

    <div class="header-item">
      <RouterLink id="cabecalho" to="/ajuda">Ajuda</RouterLink>
    </div>

    <div class="progress">Progresso</div>
  </header>

  <RouterView />
</template>


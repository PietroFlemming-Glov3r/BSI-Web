<template>
  <li :class="{ concluida: tarefa.concluida }">
    <button @click="toggleDescricao" class="item-lista">
      {{ tarefa.nome }}<span v-if="tarefa.dataLimite">, Data Limite: {{ tarefa.dataLimite }}</span>
    </button>
    <div v-if="mostrarDescricao" class="descricao">
      <p>Descrição: {{ tarefa.descricao }}</p>
    </div>
    <button @click="excluirTarefa" class="btn botao-excluir">Excluir</button>
    <button @click="concluirTarefa" class="btn botao-concluir">Concluir</button>
  </li>
</template>

<script>
export default {
  props: ['tarefa', 'index'],
  data() {
    return {
      mostrarDescricao: false,
    };
  },
  methods: {
    toggleDescricao() {
      this.mostrarDescricao = !this.mostrarDescricao;
    },
    excluirTarefa() {
      this.$emit('excluirTarefa', this.index);
    },
    concluirTarefa() {
      this.$emit('concluirTarefa', this.index);
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
}

.botao-excluir,
.botao-concluir {

  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn {
    position: absolute;
}

.botao-concluir {
    right: 2%;
    z-index: 1;
}

.botao-excluir {
    right: calc(2% + 75px);
    z-index: 2;
}

.botao-excluir {
  background-color: #ed5151;
}

.botao-concluir {
  background-color: #6eff69;
}

.descricao {
  margin-top: 10px;
}

.item-lista {
  padding: 0;
  border: none;
  background: none;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}
</style>

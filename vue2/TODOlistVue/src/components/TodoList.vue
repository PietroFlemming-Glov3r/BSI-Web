<template>
  <div class="container">
    <h1 class="titulo">To-Do List</h1>
    <input type="text" v-model="nomeTarefa" class="nomeTarefa" placeholder="Adicionar nova tarefa..." />
    <div class="checkboxes">
      <div class="checkbox">
        <input type="checkbox" v-model="verificaData" @change="apareceData" />
        <label class="teste" for="verificaData">Data limite</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" v-model="verificaDesc" @change="apareceDesc" />
        <label class="teste" for="verificaDesc">Descrição</label>
      </div>
    </div>
    <div class="campos">
      <div :class="{ invisivel: !verificaData }" id="divData">
        <label for="dataLimite">Data:</label>
        <input type="datetime-local" v-model="dataLimite" id="dataLimite" />
      </div>
      <div :class="{ invisivel: !verificaDesc }" id="divDesc">
        <label for="descTarefa">Descrição:</label>
        <textarea v-model="descTarefa" id="descTarefa"></textarea>
      </div>
    </div>
    <button @click="adicionaTarefa" class="addButton">Adiciona tarefa</button>
    <ul id="listaTarefas">
      <TaskItem
        v-for="(tarefa, index) in listaTarefa"
        :key="index"
        :tarefa="tarefa"
        :index="index"
        @excluirTarefa="excluirTarefa"
        @concluirTarefa="marcarComoConcluida"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
import dayjs from 'dayjs';

export default {
  components: { TaskItem },
  data() {
    return {
      nomeTarefa: '',
      dataLimite: '',
      descTarefa: '',
      verificaData: false,
      verificaDesc: false,
      listaTarefa: [],
    };
  },
  methods: {
    apareceData() {},
    apareceDesc() {},
    adicionaTarefa() {
      if (this.verificaData && !this.dataLimite) {
        alert('Falha ao criar tarefa: Data limite não pode estar vazia.');
        return;
      }

      if (this.verificaDesc && !this.descTarefa) {
        alert('Falha ao criar descrição: Descrição não pode estar vazia.');
        return;
      }

      const tarefa = {
        nome: this.nomeTarefa,
        dataLimite: this.verificaData ? dayjs(this.dataLimite).format('DD [de] MMMM [de] YYYY, HH:mm') : '',
        descricao: this.verificaDesc ? this.descTarefa : '',
        concluida: false,
      };

      this.listaTarefa.push(tarefa);

      this.nomeTarefa = '';
      this.dataLimite = '';
      this.descTarefa = '';
      this.verificaData = false;
      this.verificaDesc = false;

      alert('Tarefa adicionada com sucesso!');
    },
    excluirTarefa(index) {
      this.listaTarefa.splice(index, 1);
    },
    marcarComoConcluida(index) {
      this.listaTarefa[index].concluida = true;
    },
  },
};
</script>


<style scoped>
/* Estilos do CSS aqui */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  font-family: "Signika Negative", sans-serif;
}

input[type="text"] {
  width: calc(100% - 32px);
  padding: 8px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 5px;
}

label {
  font-family: "Cabin", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.titulo{
    font-family: "Cabin", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
}


.nomeTarefa
{
  border-radius: 30px
}

.addButton {
  background-color: #6eff69;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.invisivel {
  display: none;
}

.checkbox {
  padding: 0.8%;
  margin: 0.75%;
  border: 2px solid #454545;
  border-radius: 15px;
  min-width: 110px;
  width: max-content;
}

.checkboxes {
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 500;
  display: inline-flex;
}

.campos {
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  display: flex;
  margin: 2%;
}

.concluida {
  text-decoration: line-through;
  opacity: 0.5;
  color: white;
}

@media only screen and (max-width: 600px) {
  input[type="text"] {
    width: 100%;
  }
}
</style>

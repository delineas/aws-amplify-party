<template>
  <div>
    <section>
      <aside v-for="task in tasks" :key="task.id">
        <h3>{{ task.name }}</h3>
      </aside>
    </section>
    <section>
      <form v-on:submit.prevent>
        <div>
          <label>Tarea: </label>
          <input v-model="form.name" class="input" />
        </div>
        <button @click="createTask" class="button">Guardar</button>
      </form>
    </section>
  </div>
</template>

<script>
import { API, graphqlOperation } from "aws-amplify";
import { listTasks } from "../graphql/queries";
import { createTask } from "../graphql/mutations";
import { onCreateTask } from "../graphql/subscriptions";

export default {
  data() {
    return {
      tasks: [],
      form: {},
    };
  },
  created() {
    this.getData();
    API.graphql(graphqlOperation(onCreateTask)).subscribe(
    (sourceData) => {
        const newTask = sourceData.value.data.onCreateTask;
        if (newTask) {
        if (this.tasks.some((r) => r.id == newTask.id)) return;
        console.log("Subscription accomplished!");
        this.tasks = [newTask, ...this.tasks];
        }
    }
    );
  },
  methods: {
    async createTask() {
      const { name } = this.form;
      if (!name) return;

      const task = { name: name };
      try {
        const response = await API.graphql(
          graphqlOperation(createTask, { input: task })
        );
        console.log("Taskyyy!");
        this.tasks = [...this.tasks, response.data.createTask];
        this.form = { name: "" };
      } catch (error) {
        console.log("Error creating task...", error);
      }
    },
    async getData() {
      try {
        const response = await API.graphql(graphqlOperation(listTasks));
        this.tasks = response.data.listTasks.items;
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
};
</script>

<style></style>

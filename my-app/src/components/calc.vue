<script>

</script>

<template>
  <main class="phone">
    <div class="top">
        <button @click="showHistory" class="history"></button>
        <button @click="deleteValue" class="delete"></button>
    </div>
    <ul v-if="isHistory" class="historyDetails">
            <li :key="operation.operations" v-for="operation in historyData" >
                <small>{{operation.operations}}</small>
                <h2>{{operation.sum}}</h2>
            </li>
        </ul>
  </main>
</template>
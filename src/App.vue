<template>
  <div id="app">
    <router-link class="text-2xl my-4" to="/test1">Test n°1 : {{ title[1] }} </router-link><br />
    <router-link class="text-2xl my-4" to="/test2">Test n°2 : {{ title[2] }} </router-link><br />
    <router-link class="text-2xl my-4" to="/test3">Test n°3 : {{ title[3] }} </router-link><br />
    <router-link class="text-2xl my-4" to="/test4">Test n°4 : {{ title[4] }} </router-link><br />
    <router-link class="text-2xl my-4" to="/test5">Test n°5 : {{ title[5] }} </router-link><br />
    <router-link class="text-2xl my-4" to="/test6">Test n°6 : {{ title[6] }} </router-link>
    <hr class="my-12">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title : {
        1: 'Une arborescence qui se déroule',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>


<template>
  <div id="app">
    <h1 class="ui dividing centered header">RecipeApp</h1>
    <div class='ui three column centered grid'>
      <div class='column'>
        <create-recipe v-on:create-recipe="createRecipe"></create-recipe>
        <recipe-list v-bind:recipes="recipes"></recipe-list>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert'
import RecipeList from './components/RecipeList'
import CreateRecipe from './components/CreateRecipe'
export default {
  name: 'app',
  components: {
    RecipeList,
    CreateRecipe
  },
  data () {
    return {
      recipes: [{
        name: 'Carbonara',
        ingredients: 'cheese, bacon',
        instructions: 'cook pasta'
      }]
    }
  },
  methods: {
    createRecipe (newRecipe) {
      this.recipes.push(newRecipe)
      sweetalert('Success!', 'To-Do created!', 'success')
    }
  }
}
</script>

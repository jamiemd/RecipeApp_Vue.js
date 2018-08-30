
<template>
  <div id="app">
    <h1 class="ui dividing centered header">RecipeApp</h1>
    <div>
        <create-recipe v-on:create-recipe="createRecipe"></create-recipe>
        <recipe-list v-bind:recipes="recipes"></recipe-list>
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
      },
      { name: 'Salad',
        ingredients: 'veggies',
        instructions: 'toss the veggies'}
      ]
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

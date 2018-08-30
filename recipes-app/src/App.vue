
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
import RecipeList from './components/RecipeList'
import CreateRecipe from './components/CreateRecipe'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    RecipeList,
    CreateRecipe
  },
  data () {
    return {
      // recipes: [{
      //   name: 'Carbonara',
      //   ingredients: 'cheese, bacon',
      //   instructions: 'cook pasta'
      // },
      // { name: 'Salad',
      //   ingredients: 'veggies',
      //   instructions: 'toss the veggies'}
      // ]
      recipes: []
    }
  },
  mounted: () => {
    console.log('data mounted')
    axios.get('http://localhost:8000/api/recipes')
      .then((response) => {
        console.log('response.data[0]', response.data)
        this.loading = false
        this.recipes = response.data
        console.log('this.recipes', this.recipes)
      }, (error) => {
        console.log('error', error.response)
        this.loading = false
      })
  },
  methods: {
    createRecipe (newRecipe) {
      this.recipes.push(newRecipe)
      console.log('newRecipe', newRecipe)
      axios.post('http://localhost:8000/api/addrecipe', newRecipe)
        .then((response) => {
          console.log('response: createRecipe', response)
        }, (error) => {
          console.log('error', error.response)
        })
    }
  }

}
</script>

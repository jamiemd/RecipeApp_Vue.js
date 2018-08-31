
<template>
  <div id="app">
    <h1 class="ui centered header">RecipeApp</h1>
    <div>
        <create-recipe v-on:create-recipe="createRecipe" v-on:show-create-form="showCreateForm" v-on:hide-create-form="hideCreateForm"></create-recipe>
        <recipe-list v-bind:recipes="recipes"  v-show="!isCreating"></recipe-list>
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
      recipes: [],
      isCreating: false
    }
  },
  mounted () {
    console.log('data mounted')
    axios.get('/api/recipes')
      .then((response) => {
        console.log('response.data', response.data)
        this.loading = false
        this.recipes = response.data
        console.log('this.recipes', this.recipes)
      }, (error) => {
        console.log('error', error.response)
        this.loading = false
      })
  },
  methods: {
    showCreateForm () {
      console.log('show form clicked')
      this.isCreating = true
    },
    hideCreateForm () {
      console.log('hide form clicked')
      this.isCreating = false
    },
    createRecipe (newRecipe) {
      this.recipes.push(newRecipe)
      console.log('newRecipe', newRecipe)
      axios.post('/api/add-recipe', newRecipe)
        .then((response) => {
          console.log('response: createRecipe', response)
        }, (error) => {
          console.log('error', error.response)
        })
      this.isCreating = false
    }
  }

}
</script>

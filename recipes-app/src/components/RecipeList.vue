
<template>

<div class='ui three column centered grid'>

  <div class='two wide column'>
    <recipe v-on:delete-recipe="deleteRecipe" v-on:show-edit-form="showEditForm" v-bind:showEditForm="showEditForm" v-for="recipe in recipes" :key="recipe.id" :recipe.sync="recipe"></recipe>
  </div>

  <div class="one wide column"/>

    <div class='eight wide column' v-show="!isEditing"/>

    <div class='eight wide column' v-show="isEditing">
        <div class="ui segment">
          <div class='ui form'>
            <div class='field'>
              <label>Recipe Name</label>
                <input type='text' v-model="recipeInfo.name">
            </div>
            <div class='field'>
              <label>Ingredients</label>
                <textarea v-model="recipeInfo.ingredients"></textarea>
            </div>
            <div class='field'>
              <label>Instructions</label>
                <textarea v-model="recipeInfo.instructions"></textarea>
            </div>
            <div class='ui two button attached buttons'>
              <button class='ui basic blue button' v-on:click="hideUpdateForm(recipeInfo)">
                Close
              </button>
            </div>
        </div>
      </div>
    </div>

</div>

</template>

<script type = "text/javascript" >
import Recipe from './Recipe'
import axios from 'axios'

export default {
  props: ['recipes'],
  components: {
    Recipe
  },
  data () {
    return {
      isEditing: false,
      recipeInfo: ''
    }
  },
  methods: {
    deleteRecipe (recipe) {
      console.log('recipe in delete', recipe)
      const recipeIndex = this.recipes.indexOf(recipe)
      this.recipes.splice(recipeIndex, 1)
      axios.delete('http://localhost:8000/api/delete-recipe', recipe)
        .then((response) => {
          console.log('response in delete', response)
        }).catch((err) => {
          console.log('err', err)
        })
    },
    hideUpdateForm (recipe) {
      console.log('recipe in update', recipe)
      this.isEditing = false
      axios.put('http://localhost:8000/api/update-recipe', recipe)
        .then((response) => {
          console.log('response in update', response)
        }).catch((err) => {
          console.log('err', err)
        })
    },
    showEditForm (recipe) {
      console.log('recipe', recipe)
      this.isEditing = true
      this.recipeInfo = recipe
    }
  }
}
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>


<template>

<div class='ui two column centered grid'>

  <div class='two wide column'>
    <recipe v-on:delete-recipe="deleteRecipe" v-on:show-form="showForm" v-bind:showForm="showForm" v-for="recipe in recipes" :key="recipe.id" :recipe.sync="recipe"></recipe>
  </div>

  <div class='eight wide column' v-show="isEditing">
    <div class='ui centered card'>
      <div class="content">
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
            <button class='ui basic blue button' v-on:click="hideForm">
              Close X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

</template>

<script type = "text/javascript" >
import Recipe from './Recipe'

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
      const recipeIndex = this.recipes.indexOf(recipe)
      this.recipes.splice(recipeIndex, 1)
    },
    hideForm () {
      this.isEditing = false
    },
    showForm (recipe) {
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

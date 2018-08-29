<template>

<div class='ui two column centered grid'>

  <div class='two wide column'>
    <div class='ui centered card'>
      hi
    </div>
  </div>

  <div class='eight wide column'>

    <div class='ui centered card'>

        <div class="content" v-show="!isEditing">
          <div class='header'>
              {{ recipe.name }}
          </div>
          <div class='header'>
              {{ recipe.ingredients }}
          </div>
          <div class='header'>
              {{ recipe.instructions }}
          </div>
          <div class='extra content'>
              <span class='right floated edit icon' v-on:click="showForm">
              <i class='edit icon'></i>
            </span>
            <span class='right floated trash icon' v-on:click="deleteRecipe(recipe)">
              <i class='trash icon'></i>
            </span>
          </div>
        </div>

        <div class="content" v-show="isEditing">
          <div class='ui form'>
            <div class='field'>
              <label>Recipe Name</label>
              <input type='text' v-model="recipe.name" >
            </div>
            <div class='field'>
              <label>Ingredients</label>
                <textarea v-model="recipe.ingredients"></textarea>
            </div>
            <div class='field'>
              <label>Instructions</label>
                <textarea v-model="recipe.instructions"></textarea>
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

<script type="text/javascript">
import axios from 'axios'

export default {
  props: ['recipe'],
  data () {
    return {
      isEditing: false,
      loading: false
    }
  },
  methods: {
    deleteRecipe (recipe) {
      this.$emit('delete-recipe', recipe)
    },
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    created () {
      this.loading = true
      axios.get('http://api/recipes')
        .then((response) => {
          this.loading = false
          this.recipes = response.data.value
        }).catch((err) => {
          console.log('err', err)
          this.loading = false
        })
    }
  }
}
</script>

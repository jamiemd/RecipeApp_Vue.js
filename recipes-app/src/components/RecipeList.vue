
<template>
  <div>
    <recipe v-on:delete-recipe="deleteRecipe" v-on:complete-recipe="completeRecipe" v-for="recipe in recipes" :key="recipe.id" :recipe.sync="recipe"></recipe>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert'
import Recipe from './Recipe'

export default {
  props: ['recipes'],
  components: {
    Recipe
  },
  methods: {
    deleteRecipe (recipe) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This To-Do will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      },
      () => {
        const recipeIndex = this.recipes.indexOf(recipe)
        this.recipes.splice(recipeIndex, 1)
        sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success')
      })
    }
  }
}
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>

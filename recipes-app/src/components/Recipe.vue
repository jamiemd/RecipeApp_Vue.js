<template>

<div>
  <div class='ui centered card'>
    <div class="content">
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
          <span class='right floated edit icon' v-on:click="showForm(recipe)">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteRecipe(recipe)">
          <i class='trash icon'></i>
        </span>
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
      loading: false
    }
  },
  methods: {
    deleteRecipe (recipe) {
      this.$emit('delete-recipe', recipe)
    },
    showForm (recipe) {
      this.$emit('show-form', recipe)
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

<template>
<div>
  <div class='ui center aligned segment'>
    <button class='ui green button' v-on:click="showCreateForm" v-show="!isCreating">Create Recipe</button>
  </div>

    <div class='ui centered grid'>
    <div class='eight wide column'>
      <div class='ui segment' v-show="isCreating">
        <div class='content'>
          <div class='ui form'>
            <div class='field'>
              <label>Recipe Name</label>
              <input v-model="name" type='text'>
            </div>
            <div class='field'>
              <label>Ingredients</label>
              <textarea v-model="ingredients"></textarea>
            </div>
            <div class='field'>
              <label>Instructions</label>
              <textarea v-model="instructions"></textarea>
            </div>
            <div class='ui two button attached buttons'>
              <button class='ui basic blue button' v-on:click="sendCreateForm()">
                Create
              </button>
              <button class='ui basic red button' v-on:click="cancelCreateForm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

</div>

</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      ingredients: '',
      instructions: '',
      isCreating: false
    }
  },
  methods: {
    showCreateForm () {
      console.log('show create form clicked')
      this.isCreating = true
      this.$emit('show-create-form')
    },
    cancelCreateForm () {
      console.log('cancel create form clicked')
      this.isCreating = false
      this.$emit('hide-create-form')
    },
    sendCreateForm () {
      if (this.name.length > 0 && this.ingredients.length > 0 && this.instructions.length > 0) {
        const name = this.name
        const ingredients = this.ingredients
        const instructions = this.instructions
        this.$emit('create-recipe', {
          name,
          ingredients,
          instructions
        })
        this.name = ''
        this.ingredients = ''
        this.instructions = ''
        this.isCreating = false
      //   axios.post(`http://jsonplaceholder.typicode.com/posts`, {
      //     body: this.postBody
      //   })
      //     .then(response => {})
      //     .catch(e => {
      //       console.log('e', e)
      //     })
      // }
      }
    }
  }
}

</script>

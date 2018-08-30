<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui button' v-on:click="openForm" v-show="!isCreating">Create New Recipe</button>
    <div class='ui centered card' v-show="isCreating">
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
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
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
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
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

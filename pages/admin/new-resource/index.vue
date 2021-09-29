<template>
  <v-form @submit.prevent="onSave">
    <v-container>
      <v-row>
        <h3>New resource</h3>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="editedResource.title"
            label="Title"
            filled
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="editedResource.summary"
            label="Summary"
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-select
            v-model="editedResource.type"
            :items="types"
            filled
            label="Type"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-select
            v-model="editedResource.category"
            :items="categories"
            filled
            label="Category"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            label="Link URL"
            filled
          />
        </v-col>
      </v-row>
      <v-row
        justify="space-around"
      >
        <v-btn
          type="submit"
          color="success"
          class="mr-4"
        >
          Submit
        </v-btn>

        <v-btn
          color="warning"
          @click="onCancel"
        >
          Cancel
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'NewResource',
  data () {
    return {
      types: ['Audio', 'Video', 'Text'],
      categories: ['Key Stage 1', 'Key Stage 2', 'Secondary', 'Parents', 'Teachers'],
      editedResource: {
        title: '',
        summary: '',
        type: '',
        category: '',
        link: ''
      }
    }
  },
  methods: {
    onSave () {
      // Save the post
      console.log(this.editedResource)
    },
    onCancel () {
      // navigate back
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>

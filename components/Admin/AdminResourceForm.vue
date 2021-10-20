<template>
  <v-container>
    <v-form
      id="resource-edit-form"
      @submit.prevent="onSave"
    >
      <v-container>
        <v-row>
          <h3>{{ title }}</h3>
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
            cols="8"
          >
            <v-text-field
              v-model="editedResource.link"
              label="Link URL"
              filled
            />
          </v-col>
          <v-col cols="4">
            <v-btn
              color="primary"
              @click="onPreview"
            >
              Preview
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-spacer />
    <v-container>
      <resource-card-preview
        :img="editedResource.img"
        :link="editedResource.link"
        :title="editedResource.title"
        :summary="editedResource.summary"
        :type="editedResource.type"
        :category="editedResource.category"
      />
    </v-container>

    <v-row
      justify="space-around"
    >
      <v-btn
        color="success"
        class="mr-4"
        form="resource-edit-form"
        @click="onSave"
      >
        Submit
      </v-btn>
      <v-btn
        color="warning"
        @click="onCancel"
      >
        Cancel
      </v-btn>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Delete
            </v-btn>
          </template>

          <v-card>
            <v-card-title> Warning</v-card-title>
            <v-card-text>
              Are you sure you want to delete?
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="info"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="error"
                text
                @click="onDelete"
              >
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import axios from 'axios'
import ResourceCardPreview from '@/components/Resources/ResourceCardPreview'
export default {
  name: 'AdminResourceForm',
  components: { ResourceCardPreview },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Resource form'
    },
    // eslint-disable-next-line vue/require-default-prop
    resource: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      dialog: false,
      preview: {
        description: '',
        image: '',
        title: '',
        url: ''
      },
      types: ['Audio', 'Video', 'Text'],
      categories: ['Key Stage 1', 'Key Stage 2', 'Secondary', 'Parents', 'Teachers'],
      editedResource: this.resource
        ? { ...this.resource }
        : {
            title: '',
            summary: '',
            type: '',
            category: '',
            link: '',
            img: ''
          }
    }
  },
  methods: {
    onSave () {
      // Save the post
      this.$emit('submit', this.editedResource)
    },
    onCancel () {
      // navigate back
      this.$router.push('/admin')
    },
    onDelete () {
      // TODO add delete functionality https://firebase.google.com/docs/reference/rest/database#section-delete
      this.$store.dispatch('deleteResource', this.editedResource)
        .then(() => {
          this.$router.push('/admin')
        })
      this.dialog = false
    },
    async onPreview () {
      const preview = await this.$axios.$get('http://api.linkpreview.net/?key=91b947d8ad96d94eb94a67b2fdf887e5&q=' +
      this.editedResource.link)
      this.editedResource.title = preview.title
      this.editedResource.summary = preview.description
      this.editedResource.img = preview.image
      // eslint-disable-next-line no-console
      // console.log('Title: ' + this.editedResource.title + ' ' + this.editedResource.title.length)
      // console.log('Preview Title: ' + this.preview.title)
    }
  }
}
</script>

<style scoped>

</style>

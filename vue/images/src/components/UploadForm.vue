<template>
  <div class="upload-form">
    <input
      type="file"
      multiple
      @change="uploadImages($event.target.files)"
      accept="image/*"
    >
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadForm',
  methods: {
    ...mapActions({
      uploadImages: 'image/uploadImages'
    })
  }
}
</script>

<style scoped>
.upload-form {
  cursor: pointer;
  border: 2px dashed #777;
  border-radius: 8px;
  height: 30vh;
  width: auto;
  position: relative;
}

input {
  width: 100%;
  height: 100%;
  opacity: 0;
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

</style>

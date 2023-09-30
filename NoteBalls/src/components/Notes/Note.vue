<template>
  <div class="card mb-4 border-warning">
    <div class="card-body">
      <p class="card-text">
        {{ note.content }}
      </p>
      <p class="text-end text-secondary">
        {{ note.content.length }} characters
      </p>
    </div>

    <div class="d-flex">
      <button
        @click="$emit('edit-note', note.id)"
        class="btn btn-primary btn-sm m-2 flex-fill"
      >
        Edit
      </button>
      <button
        @click="storeNotes.deleteNote(note.id)"
        class="btn btn-danger btn-sm m-2 flex-fill"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStoreNotes } from "../../stores/storeNotes";
const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>

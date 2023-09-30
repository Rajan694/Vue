<template>
  <div class="container">
    <div class="card mb-4 p-2 border-success border-2 mt-3">
      <textarea
        v-model="newNote"
        class="form-control"
        id="textarea"
        placeholder="Add a note..."
        rows="3"
        @keyup.enter="editMode ? saveNote() : addNote()"
        ref="newNoteref"
      ></textarea>
      <div>
        <button
          class="btn btn-success btn-sm mt-2 float-end"
          @click="editMode ? saveNote() : addNote()"
          :disabled="!newNote"
        >
          {{ editMode ? "Save" : "Add" }}
        </button>
      </div>
    </div>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @edit-note="editNote"
    />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Note from "../components/Notes/Note.vue";

import { useStoreNotes } from "../stores/storeNotes";
const storeNotes = useStoreNotes();

const newNote = ref("");
const newNoteref = ref(null);
const editMode = ref(false);
const editId = ref(null);

onMounted(() => {
  newNoteref.value.focus();
});

function addNote() {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteref.value.focus();
}

function editNote(id) {
  newNoteref.value.focus();
  editMode.value = true;
  editId.value = id;
  let editNotes = storeNotes.notes.find((note) => note.id === id);
  newNote.value = editNotes.content;
}

function saveNote() {
  storeNotes.editNote(editId.value, newNote.value);
  editMode.value = false;
  newNote.value = "";
  newNoteref.value.focus();
}
</script>

<style></style>

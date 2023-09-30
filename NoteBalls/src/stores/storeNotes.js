// import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useStoreNotes = defineStore("storeNotes", {
  // Define the state
  state: () => ({
    notes: [],
  }),

  // Define mutations to modify the state
  actions: {
    addNote(newNote) {
      this.notes.unshift({
        id: this.notes.length + 1,
        content: newNote.trim(),
      });
    },
    editNote(id, updatedContent) {
      let note = this.notes.find((note) => note.id === id);
      if (note) {
        note.content = updatedContent;
      }
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },

  // Define getters to access the state
  getters: {
    totalNotesCount: (state) => {
      return state.notes.length;
    },

    totalCharacters: (state) => {
      return state.notes.reduce((acc, note) => {
        return acc + note.content.length;
      }, 0);
    },
  },
});

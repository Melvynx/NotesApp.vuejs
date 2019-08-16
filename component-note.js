Vue.component('note', {
  props: ['note'],
  data: function () {
    return {
      showDelete: false,
      isEditingTitle: false,
      isEditingNote: false
    }
  },
  methods: {
    mouseOver: function () {
      this.showDelete = true;
    },
    mouseLeave: function () {
      this.showDelete = false;
    },
    deleteNote: function() {
      const id = this.note.id
      const index = listNote.notes.findIndex(note => note.id === id);

      if(index > -1) {
        listNote.notes.splice(index, 1);
      }
      return true;
    },
    editTitle: function() {
      this.isEditingTitle = true;
      this.$nextTick(() => this.$refs.editTitle.focus());
    },
    stopEditingTitle: function() {
      this.isEditingTitle = false;
    },
    editNote: function() {
      this.isEditingNote = true;
      this.$nextTick(() => this.$refs.editNote.focus());
    },
    stopEditingNote: function() {
      this.isEditingNote = false;
    }
  },
  template: `
    <div class="note" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <h1 v-on:click="editTitle" v-show="!isEditingTitle">
        {{ note.titre }}
      </h1>
      <input
        ref="editTitle"
        class="changeNoteInput" 
        v-show="isEditingTitle" 
        type="text" 
        v-model="note.titre" 
        @focusout="stopEditingTitle">
      <p v-on:click="editNote" v-show="!isEditingNote">
        {{ note.note }}
      </p>
      <textarea
        ref="editNote"
        class="changeNoteTextarea"
        type="text"
        v-model="note.note"
        v-show="isEditingNote"
        @focusout="stopEditingNote" />
      <button class="buttonDelete" v-on:click="deleteNote" v-show="showDelete">
        <svg class="svgTrash" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="a"><path fill="#000000" stroke="none" d=" M 28.7 84.3 L 29 85.15 Q 29.4 86.15 30.1 87 32.25 89.75 36.1 89.75 L 64 89.75 Q 67.85 89.75 70 87 70.65 86.15 71.1 85.15 L 71.35 84.3 76.85 31.1 23.2 31.1 28.7 84.3 M 47.35 39.55 Q 47.35 38.45 48.15 37.7 48.95 36.9 50.05 36.9 51.15 36.9 51.9 37.7 52.7 38.45 52.7 39.55 L 52.7 79.6 Q 52.7 80.7 51.9 81.5 51.15 82.3 50.05 82.3 48.95 82.3 48.15 81.5 47.35 80.75 47.35 79.6 L 47.35 39.55 M 67.35 38.3 Q 68.15 39.05 68.15 40.15 L 64.45 79 Q 64.45 80.15 63.65 80.9 62.9 81.7 61.75 81.7 60.65 81.7 59.9 80.9 59.1 80.1 59.1 79 L 62.75 40.15 Q 62.75 39.05 63.55 38.3 64.35 37.5 65.45 37.5 66.55 37.5 67.35 38.3 M 32.75 38.3 Q 33.5 37.5 34.6 37.5 35.7 37.5 36.5 38.3 37.3 39.05 37.3 40.15 L 41 79 Q 41 80.15 40.2 80.9 39.45 81.7 38.3 81.7 37.2 81.7 36.4 80.9 35.6 80.15 35.6 79 L 31.95 40.15 Q 31.95 39.05 32.75 38.3 M 79.55 24 Q 79.55 22.35 78.3 21.15 77.05 20 75.25 20 L 61.45 20 61.45 15.6 Q 61.45 12.55 60.3 11.4 59.15 10.25 56.1 10.25 L 44 10.25 Q 38.6 10.25 38.6 15.6 L 38.6 20 24.8 20 Q 23.05 20 21.8 21.15 20.5 22.35 20.5 24 20.5 25.7 21.8 26.85 23.05 28.05 24.8 28.05 L 75.25 28.05 Q 77.05 28.05 78.3 26.85 79.55 25.7 79.55 24 M 56.1 15.6 L 56.1 20 44 20 44 15.6 56.1 15.6 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlink:href="#a"/></g></svg>
      </button>
    </div>
  `
})
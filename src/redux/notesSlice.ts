import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: string;
  content: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    updateNote: (
      state,
      action: PayloadAction<{ id: string; newContent: string }>,
    ) => {
      const { id, newContent } = action.payload;
      const note = state.notes.find(note => note.id === id);
      if (note) {
        note.content = newContent;
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;

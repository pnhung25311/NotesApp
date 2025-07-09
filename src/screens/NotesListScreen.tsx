import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addNote, deleteNote, updateNote } from '../redux/notesSlice';
import { Customer } from '../utils/custom';
import NoteItem from '../components/NoteItem';
// import uuid from 'react-native-uuid';

const NotesListScreen = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const [noteText, setNoteText] = useState('');
  const custom = new Customer();
  const handleAddNote = () => {
    if (noteText.trim()) {
      dispatch(addNote({ id: custom.generateCode(), content: noteText }));
      setNoteText('');
    }
  };

  const DeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter note..."
        value={noteText}
        onChangeText={setNoteText}
      />
      <Button title="Add Note" onPress={handleAddNote} />

      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NoteItem
            id={item.id}
            content={item.content}
            onDelete={() => DeleteNote(item.id)}
          />
        )}
      />
    </View>
  );
};

export default NotesListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});

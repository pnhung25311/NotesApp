import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateNote } from '../redux/notesSlice';
import { useDispatch } from 'react-redux';

type NoteItemProps = {
  id: string;
  content: string;
  onDelete: (id: string) => void;
//   onUpdate: (id: string, newContent: string) => void;
};

const NoteItem = ({ id, content, onDelete,  }: NoteItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateNote({ id, newContent }));
    setIsEditing(false);
  };

  return (
    <View style={styles.noteItem}>
      {isEditing ? (
        <TextInput
          value={newContent}
          onChangeText={setNewContent}
          style={styles.input}
        />
      ) : (
        <Text>{content}</Text>
      )}
      <View style={styles.buttons}>
        {isEditing ? (
          <Button title="Save" onPress={handleSave} />
        ) : (
          <Button title="Update" onPress={() => setIsEditing(true)} />
        )}
        <Button title="Delete" onPress={() => onDelete(id)} />
      </View>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'column',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 5,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

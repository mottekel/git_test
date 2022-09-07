import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';


function Write(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  return (
    <div style={{ height: '100%' }}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default Write;
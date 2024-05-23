import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');

  const executeCode = () => {
    if (language !== 'javascript') {
      setOutput(`Execution for ${language} is not supported in this example.`);
      return;
    }

    try {
      const log = console.log; // Save the original console.log function
      const logs = []; // Array to capture console outputs

      // Override console.log to capture outputs
      console.log = (...args) => {
        logs.push(args.join(' ')); // Push the logged message to the logs array
        log(...args); // Call the original console.log function
      };

      // Execute the code
      eval(code);

      // Restore the original console.log function
      console.log = log;

      // Set the output to the captured logs
      setOutput(logs.join('\n'));
    } catch (error) {
      setOutput(`Error: ${error.message}`); // Handle errors
    }
  };

  const editorDidMount = (editor, monaco) => {
    console.log('Editor mounted');
  };

  const onChange = (newValue, e) => {
    console.log('onChange', newValue);
    setCode(newValue);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setCode(`// Write your ${e.target.value} code here`);
  };

  return (
    <div>
      <h2>Code Editor</h2>
      <div>
        <label htmlFor="language-select">Choose a language: </label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="ruby">Ruby</option>
          <option value="java">Java</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <MonacoEditor
        height="400"
        language={language}
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true
        }}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
      <button onClick={executeCode}>Execute</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;

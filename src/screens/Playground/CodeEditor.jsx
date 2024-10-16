import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';

// Theme imports
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
import { bespin } from '@uiw/codemirror-theme-bespin';
import { duotoneDark, duotoneLight } from '@uiw/codemirror-theme-duotone';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// Language imports
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';

// Configuration imports
import { indentUnit } from '@codemirror/language';
import { EditorState } from '@codemirror/state';

// Styled component for the editor container
const EditorContainer = styled.div`
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden; /* Prevents overflow */
`;

const CodeEditor = ({
    currentLanguage,
    currentTheme,
    currentCode,
    setCurrentCode
}) => {
    const [theme, setTheme] = useState(githubDark);
    const [language, setLanguage] = useState(javascript);

    // Effect to update language based on currentLanguage prop
    useEffect(() => {
        switch (currentLanguage) {
            case 'cpp':
                setLanguage(cpp);
                break;
            case 'java':
                setLanguage(java);
                break;
            case 'javascript':
                setLanguage(javascript);
                break;
            case 'python':
                setLanguage(python);
                break;
            default:
                setLanguage(javascript); // Fallback to JavaScript
        }
    }, [currentLanguage]);

    // Effect to update theme based on currentTheme prop
    useEffect(() => {
        switch (currentTheme) {
            case 'githubDark':
                setTheme(githubDark);
                break;
            case 'githubLight':
                setTheme(githubLight);
                break;
            case 'bespin':
                setTheme(bespin);
                break;
            case 'duotoneDark':
                setTheme(duotoneDark);
                break;
            case 'duotoneLight':
                setTheme(duotoneLight);
                break;
            case 'dracula':
                setTheme(dracula);
                break;
            case 'xcodeDark':
                setTheme(xcodeDark);
                break;
            case 'xcodeLight':
                setTheme(xcodeLight);
                break;
            case 'vscodeDark':
                setTheme(vscodeDark);
                break;
            case 'okaidia':
                setTheme(okaidia);
                break;
            default:
                setTheme(githubDark); // Fallback to GitHub Dark
        }
    }, [currentTheme]);

    return (
        <EditorContainer>
            <CodeMirror
                value={currentCode}
                height="100%"
                theme={theme}
                extensions={[
                    language,
                    indentUnit.of("        "),
                    EditorState.tabSize.of(8),
                    EditorState.changeFilter.of(() => true)
                ]}
                onChange={(value) => setCurrentCode(value)}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    highlightSpecialChars: true,
                    history: true,
                    foldGutter: true,
                    drawSelection: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                    syntaxHighlighting: true,
                    bracketMatching: true,
                    closeBrackets: true,
                    autocompletion: true,
                    rectangularSelection: true,
                    crosshairCursor: true,
                    highlightActiveLine: true,
                    highlightSelectionMatches: true,
                    closeBracketsKeymap: true,
                    defaultKeymap: true,
                    searchKeymap: true,
                    historyKeymap: true,
                    foldKeymap: true,
                    completionKeymap: true,
                    lintKeymap: true,
                }}
            />
        </EditorContainer>
    );
}

export default CodeEditor;

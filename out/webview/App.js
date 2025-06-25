"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const App = () => {
    const [input, setInput] = (0, react_1.useState)('');
    const [messages, setMessages] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        window.addEventListener('message', (event) => {
            const msg = event.data;
            if (msg.command === 'answer') {
                setMessages((prev) => [...prev, `AI: ${msg.text}`]);
            }
        });
    }, []);
    const sendMessage = () => {
        setMessages((prev) => [...prev, `You: ${input}`]);
        vscode.postMessage({ command: 'ask', text: input });
        setInput('');
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { padding: 10 } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { height: 300, overflowY: 'auto', background: '#222', color: '#fff', padding: 10 } }, { children: messages.map((m, i) => (0, jsx_runtime_1.jsx)("div", { children: m }, i)) })), (0, jsx_runtime_1.jsx)("input", { value: input, onChange: (e) => setInput(e.target.value), style: { width: '80%', marginTop: 10 } }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: sendMessage }, { children: "Send" }))] })));
};
exports.default = App;

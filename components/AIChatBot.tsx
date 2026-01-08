
import React, { useState, useRef, useEffect } from 'react';
import { assistant } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Terminal, X, Command, CornerDownLeft } from 'lucide-react';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: "Console initialized. Ask me about Prince's technical background or curriculum work at Google." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    try {
      const reply = await assistant.chat(input, messages);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "> ERROR: COMMUNICATION_FAILURE" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-2xl px-6">
      {isOpen ? (
        <div className="glass-slab rounded-xl overflow-hidden shadow-2xl border-[var(--border)] flex flex-col h-[400px] animate-in slide-in-from-bottom-8 duration-500">
          <div className="p-3 border-b border-[var(--border)] flex justify-between items-center bg-[var(--void)] opacity-90">
            <div className="flex items-center gap-2 text-[10px] mono uppercase tracking-widest text-[var(--text-secondary)]">
              <Terminal size={12} className="text-[var(--accent)]" />
              System.Assistant_v2.5
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <X size={14} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 mono text-[13px] leading-relaxed bg-[var(--slab)]">
            {messages.map((m, i) => (
              <div key={i} className="flex gap-3">
                <span className={`shrink-0 ${m.role === 'user' ? 'text-[var(--text-tertiary)]' : 'text-[var(--accent)]'}`}>
                  {m.role === 'user' ? '[usr]:' : '[bot]:'}
                </span>
                <span className={m.role === 'assistant' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}>
                  {m.text}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 text-[var(--accent)] animate-pulse">
                <span>_</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-[var(--slab)] border-t border-[var(--border)] flex gap-3 items-center">
            <span className="text-[var(--text-tertiary)] mono text-xs uppercase tracking-tighter">Query:</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your command..."
              className="flex-1 bg-transparent text-[var(--text-primary)] text-sm mono focus:outline-none placeholder:text-[var(--text-tertiary)]"
              autoFocus
            />
            <div className="flex items-center gap-1 text-[10px] mono text-[var(--text-tertiary)]">
              <CornerDownLeft size={10} />
              ENTER
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="mx-auto flex items-center gap-4 px-6 py-3 glass-slab rounded-full hover:border-[var(--accent)]/40 hover:scale-[1.02] transition-all group shadow-xl"
        >
          <div className="flex items-center gap-2 text-xs mono text-[var(--text-secondary)] uppercase tracking-widest group-hover:text-[var(--accent)]">
            <Command size={14} />
            <span>Ask Prince Miller AI</span>
          </div>
          <div className="w-px h-4 bg-[var(--border)]"></div>
          <span className="text-[10px] text-[var(--text-tertiary)] mono">Query Assistant</span>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;

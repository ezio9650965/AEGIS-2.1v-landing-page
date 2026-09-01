import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import {
  Bot,
  Sparkles,
  Send,
  RefreshCw,
  X,
  Maximize2,
  Minimize2,
  Github,
  Cpu,
  Check,
  Copy,
  ShieldCheck,
  AlertCircle,
  CornerDownLeft,
  ChevronDown,
  MessageSquareText,
  Zap,
  Flame,
  Search
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  modelUsed?: string;
}

const STARTER_PROMPTS = [
  {
    title: 'Lateral Movement',
    prompt: 'How does AEGIS prevent lateral movement if an internal workstation gets compromised?',
    icon: 'ShieldCheck',
  },
  {
    title: 'Auth Pipeline',
    prompt: 'Explain the request lifecycle between Traefik v3, Authelia, and Keycloak in AEGIS 2.1v.',
    icon: 'Layers',
  },
  {
    title: '<5s Containment',
    prompt: 'How does the Wazuh + Sysmon automated containment isolate threats in under 5 seconds?',
    icon: 'Zap',
  },
  {
    title: 'VPN vs AEGIS',
    prompt: 'Compare legacy corporate VPNs with AEGIS Zero-Trust architecture for remote workers.',
    icon: 'Flame',
  },
];

const MODELS = [
  {
    id: 'gemini-3.5-flash',
    name: 'Gemini 3.5 Flash',
    tag: 'Balanced / General',
    desc: 'Optimal balance of reasoning, accuracy, and speed',
    speed: 'Fast (~1s)',
    badgeColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  },
  {
    id: 'gemini-3.1-pro-preview',
    name: 'Gemini 3.1 Pro',
    tag: 'Deep Reasoning',
    desc: 'Advanced threat modeling, complex policy design & deep analysis',
    speed: 'Deep (~3s)',
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  },
  {
    id: 'gemini-3.1-flash-lite',
    name: 'Gemini 3.1 Flash Lite',
    tag: 'Ultra Fast',
    desc: 'Lightweight quick responses and rapid Q&A lookup',
    speed: 'Ultra Fast (<0.5s)',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  },
];

export function AegisChatbot() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-3.5-flash');
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      text: `Hello! I am the **AEGIS 2.1v Intelligence & Architecture AI**.\n\nMy primary knowledge base is grounded in the official repository [**ezio9650965/AEGIS-2.1v-overview**](https://github.com/ezio9650965/AEGIS-2.1v-overview.git), NIST SP 800-207 Zero-Trust specifications, and enterprise security telemetry.\n\nAsk me about:\n- **Traefik v3 + Authelia + Keycloak** ingress authentication\n- **Automated Threat Containment** in < 5 seconds via Wazuh/SOAR\n- **Role-Based Access Control (RBAC)** and BeyondCorp microsegmentation\n- **4-Phase Migration Roadmap** from legacy firewalls and VPNs`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-3.5-flash',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Listen for open-aegis-chat custom event
  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent<{ initialPrompt?: string; model?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.model) {
        setSelectedModel(customEvent.detail.model);
      }
      if (customEvent.detail?.initialPrompt) {
        handleSendMessage(customEvent.detail.initialPrompt);
      }
    };

    window.addEventListener('open-aegis-chat', handleOpenChat as EventListener);
    return () => {
      window.removeEventListener('open-aegis-chat', handleOpenChat as EventListener);
    };
  }, [messages, selectedModel]);

  // Auto-scroll when messages change or loading state changes
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = (customText || inputPrompt).trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputPrompt('');
    setIsLoading(true);

    try {
      // Map message history to send to server
      const apiMessages = newHistory.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          model: selectedModel,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: data.text || 'No response generated.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.model || selectedModel,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        text: `⚠️ **Error communicating with Gemini AI:**\n${err.message || 'Please verify your server connection and Gemini API key.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: `Chat reset. I am ready to answer your questions about the [**AEGIS 2.1v Specification**](https://github.com/ezio9650965/AEGIS-2.1v-overview.git) and Zero-Trust architecture.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel,
      },
    ]);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentModelObj = MODELS.find((m) => m.id === selectedModel) || MODELS[0];

  return (
    <>
      {/* Floating Trigger Button in Bottom Left */}
      <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 print:hidden">
        <button
          type="button"
          id="open-aegis-chat-btn"
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 ${
            isOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100 hover:scale-105'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
            border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid #CBD5E1',
            color: theme === 'dark' ? '#38BDF8' : '#0369A1',
            boxShadow: theme === 'dark'
              ? '0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 20px -3px rgba(56, 189, 248, 0.35)'
              : '0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 0 15px -3px rgba(3, 105, 161, 0.15)',
          }}
          title="Ask AEGIS Intelligence AI"
          aria-label="Open AEGIS AI Chatbot"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <Bot className="w-4 h-4 text-sky-400" />
          <span className="tracking-wide">Ask AEGIS AI</span>
          <span className="hidden md:inline-block text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 font-normal">
            Gemini
          </span>
        </button>
      </div>

      {/* Interactive Chat Window Modal / Panel */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 print:hidden flex flex-col ${
            isExpanded
              ? 'inset-3 sm:inset-6 md:inset-10'
              : 'bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[480px] md:w-[540px] h-[640px] max-h-[88vh]'
          }`}
        >
          <div
            className="w-full h-full rounded-3xl border flex flex-col overflow-hidden shadow-2xl backdrop-blur-2xl transition-all"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.96)',
              borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#CBD5E1',
              boxShadow: theme === 'dark'
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(56, 189, 248, 0.25)'
                : '0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 20px -5px rgba(3, 105, 161, 0.1)',
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-3.5 border-b flex items-center justify-between gap-3 select-none flex-shrink-0"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#F8FAFC',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm flex-shrink-0"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : '#E0F2FE',
                    borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#BAE6FD',
                    color: theme === 'dark' ? '#38BDF8' : '#0284C7',
                  }}
                >
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold tracking-tight">AEGIS Intelligence</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      2.1v
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Knowledge Source: </span>
                    <a
                      href="https://github.com/ezio9650965/AEGIS-2.1v-overview.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline flex items-center gap-0.5 font-bold"
                    >
                      <Github className="w-3 h-3" />
                      <span>ezio9650965/AEGIS-2.1v-overview</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg border text-slate-400 hover:text-slate-200 transition-colors"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                  }}
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? 'Collapse' : 'Expand'}
                  className="p-1.5 rounded-lg border text-slate-400 hover:text-slate-200 transition-colors hidden sm:inline-flex"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                  }}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg border text-slate-400 hover:text-red-400 transition-colors"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Model Selector Bar */}
            <div
              className="px-4 py-2 border-b flex items-center justify-between gap-2 text-xs font-mono flex-shrink-0"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.015)' : '#F1F5F9',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
              }}
            >
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-2 px-2.5 py-1 rounded-md border text-xs font-mono transition-colors"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                  }}
                >
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-semibold">{currentModelObj.name}</span>
                  <span className="text-[10px] text-slate-400">({currentModelObj.tag})</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {/* Dropdown menu */}
                {modelDropdownOpen && (
                  <div
                    className="absolute left-0 top-full mt-1 w-72 rounded-xl border shadow-xl z-50 p-1.5 space-y-1 backdrop-blur-xl"
                    style={{
                      backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
                      borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#CBD5E1',
                    }}
                  >
                    {MODELS.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setSelectedModel(m.id);
                          setModelDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-lg transition-colors flex flex-col gap-0.5 ${
                          selectedModel === m.id
                            ? theme === 'dark' ? 'bg-sky-500/15 border border-sky-500/30' : 'bg-sky-50 border border-sky-200'
                            : 'hover:bg-slate-500/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs">{m.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded border font-mono ${m.badgeColor}`}>
                            {m.tag}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 leading-tight">{m.desc}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Trust Grounded</span>
              </div>
            </div>

            {/* Scrollable Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} group`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-slate-400 font-mono">
                      {isUser ? (
                        <span>You</span>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <Bot className="w-3.5 h-3.5 text-sky-400" />
                          <span className="font-bold text-sky-400">AEGIS AI</span>
                          {msg.modelUsed && (
                            <span className="text-[9px] px-1 py-0.2 rounded bg-slate-500/10 border border-slate-500/20 text-slate-400">
                              {msg.modelUsed}
                            </span>
                          )}
                        </div>
                      )}
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div
                      className={`relative max-w-[92%] sm:max-w-[85%] rounded-2xl p-3.5 sm:p-4 border transition-all ${
                        isUser
                          ? 'bg-sky-600 text-white border-sky-500 shadow-md rounded-tr-sm'
                          : theme === 'dark'
                            ? 'bg-slate-900/90 text-slate-200 border-slate-700/70 shadow-md rounded-tl-sm'
                            : 'bg-white text-slate-800 border-slate-200 shadow-sm rounded-tl-sm'
                      }`}
                    >
                      {/* Markdown content */}
                      <div className="prose prose-sm dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed overflow-x-auto">
                        <Markdown>{msg.text}</Markdown>
                      </div>

                      {/* Copy action on hover for bot messages */}
                      {!isUser && (
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.text)}
                          title="Copy text"
                          className="absolute top-2.5 right-2.5 p-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-slate-400 font-mono">
                    <Bot className="w-3.5 h-3.5 text-sky-400 animate-spin" />
                    <span className="font-bold text-sky-400">AEGIS AI</span>
                    <span>is analyzing architecture specs...</span>
                  </div>
                  <div
                    className="rounded-2xl p-4 border flex items-center gap-3 rounded-tl-sm"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.8)' : '#FFFFFF',
                      borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#CBD5E1',
                    }}
                  >
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Querying {currentModelObj.name}...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Chips */}
            {messages.length <= 2 && (
              <div
                className="px-4 py-2 border-t flex flex-wrap gap-1.5 flex-shrink-0"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                }}
              >
                <div className="w-full text-[11px] font-mono text-slate-400 mb-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-400" />
                  <span>Suggested Architecture Inquiries:</span>
                </div>
                {STARTER_PROMPTS.map((starter) => (
                  <button
                    key={starter.title}
                    type="button"
                    onClick={() => handleSendMessage(starter.prompt)}
                    className="px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all hover:scale-[1.02] active:scale-95"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.08)' : '#F0F9FF',
                      borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                      color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                    }}
                  >
                    {starter.title}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div
              className="p-3 sm:p-4 border-t flex-shrink-0"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.9)' : '#FFFFFF',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
              }}
            >
              <div
                className="relative rounded-2xl border flex items-end p-2 transition-all focus-within:ring-2 focus-within:ring-sky-400 focus-within:border-transparent"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                }}
              >
                <textarea
                  ref={textareaRef}
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask AEGIS AI about Zero-Trust, Traefik, Keycloak, or repo specs...`}
                  rows={2}
                  disabled={isLoading}
                  className="w-full bg-transparent resize-none text-xs sm:text-sm focus:outline-none px-2 py-1 leading-relaxed"
                  style={{
                    color: theme === 'dark' ? '#F1F5F9' : '#0F172A',
                  }}
                />

                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    type="button"
                    onClick={() => handleSendMessage()}
                    disabled={!inputPrompt.trim() || isLoading}
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:pointer-events-none bg-sky-500 hover:bg-sky-400 text-white shadow-md active:scale-95 flex-shrink-0"
                    title="Send message (Enter)"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono px-1">
                <span>Press Enter to send, Shift+Enter for newline</span>
                <span>Powered by Google Gemini</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

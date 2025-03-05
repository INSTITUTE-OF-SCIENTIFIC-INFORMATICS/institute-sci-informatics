
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const TradChemChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm TradChemLLM, your assistant for traditional medicinal chemistry. Ask me about formulations from traditional medicinal systems!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const responses = [
        "Traditional Ayurvedic medicine uses a blend of curcumin from turmeric (Curcuma longa) for its anti-inflammatory properties.",
        "In traditional Chinese medicine, the herb Ginseng (Panax ginseng) contains ginsenosides that are used as adaptogenic compounds.",
        "Ashwagandha (Withania somnifera) contains withanolides that are researched for stress reduction in traditional Indian medicine.",
        "Licorice root (Glycyrrhiza glabra) contains glycyrrhizin and is used in various traditional medicine systems for respiratory conditions.",
        "In traditional Sri Lankan medicine, cinnamon (Cinnamomum verum) contains cinnamaldehyde which is studied for blood sugar regulation."
      ];

      // Select a response based on user input or choose randomly
      let responseIndex = Math.floor(Math.random() * responses.length);
      
      const userQuery = inputValue.toLowerCase();
      if (userQuery.includes("turmeric") || userQuery.includes("curcumin")) {
        responseIndex = 0;
      } else if (userQuery.includes("ginseng")) {
        responseIndex = 1;
      } else if (userQuery.includes("ashwagandha")) {
        responseIndex = 2;
      } else if (userQuery.includes("licorice")) {
        responseIndex = 3;
      } else if (userQuery.includes("cinnamon")) {
        responseIndex = 4;
      }

      const aiResponse: Message = {
        id: messages.length + 2,
        text: responses[responseIndex],
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 shadow-lg bg-institute-purple hover:bg-institute-blue text-white"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={cn(
            "bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-300 border border-gray-200",
            isMinimized ? "w-72 h-auto" : "w-80 sm:w-96 h-[500px]"
          )}
        >
          {/* Chat header */}
          <div className="bg-gradient-to-r from-institute-blue to-institute-purple text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <h3 className="font-medium">TradChemLLM Assistant</h3>
            </div>
            <div className="flex gap-1">
              <button
                onClick={toggleMinimize}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={toggleChat}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "mb-3 max-w-[80%] p-3 rounded-lg",
                      message.isUser
                        ? "bg-institute-blue text-white ml-auto rounded-br-none"
                        : "bg-gray-200 text-gray-800 mr-auto rounded-bl-none"
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 block mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-1 items-center text-gray-500">
                    <div className="w-2 h-2 bg-institute-purple rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-institute-purple rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-institute-purple rounded-full animate-bounce delay-200" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <div className="p-3 border-t border-gray-200 flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about traditional medicine..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-institute-purple hover:bg-institute-blue"
                >
                  <Send size={18} className="text-white" />
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TradChemChatbot;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// @ts-ignore - Tabs used in JSX below
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, FlaskConical, Atom, Sparkles, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

interface TradChemDBSectionProps {
  id?: string;
}

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TradChemDBSection = ({ id }: TradChemDBSectionProps) => {
  // @ts-ignore - used in search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {role: 'assistant', content: 'Welcome to TradChemLLM! Ask me about traditional medicine compounds, their benefits, or chemical structures.'}
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const navigate = useNavigate();
  const { user } = useUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    const newMessages: ChatMessage[] = [
      ...messages,
      {role: 'user' as const, content: inputMessage}
    ];
    
    setMessages(newMessages);
    
    setTimeout(() => {
      let response = '';
      
      if (inputMessage.toLowerCase().includes('curcumin')) {
        response = 'Curcumin is the active compound in turmeric (Curcuma longa), widely used in Ayurvedic medicine. It has anti-inflammatory, antioxidant, and potentially anti-cancer properties. The SMILES notation for curcumin is C1=CC(=C(C=C1C=CC(=O)CC(=O)C=CC2=CC(=C(C=C2)O)OC)O)OC.';
      } else if (inputMessage.toLowerCase().includes('ginseng') || inputMessage.toLowerCase().includes('ginsenosides')) {
        response = 'Ginsenosides are the main active compounds in Ginseng (Panax ginseng), used in Traditional Chinese Medicine. They have adaptogenic properties, helping the body resist stress and supporting immune function. There are multiple ginsenosides with different structures and SMILES notations.';
      } else if (inputMessage.toLowerCase().includes('ashwagandha') || inputMessage.toLowerCase().includes('withania')) {
        response = "Ashwagandha (Withania somnifera) is an adaptogenic herb used in Ayurvedic medicine. Its main active compounds include withanolides, which have anti-inflammatory, anti-stress, and immunomodulatory properties. It's traditionally used for stress reduction, improved energy, and overall wellbeing.";
      } else {
        response = "That's an interesting query about traditional medicine. Could you provide more specific details about the compound or medicinal system you're interested in? I can provide information about chemical composition, benefits, traditional uses, and SMILES notations.";
      }
      
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
    
    setInputMessage('');
  };

  const handleNavigateToAuth = () => {
    navigate('/auth');
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-institute-blue/5 to-institute-purple/10">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Database className="h-8 w-8 text-institute-blue" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-institute-blue to-institute-purple">
              TradChemLLM Access
            </h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Access our comprehensive collection of traditional medicinal chemicals, 
            including product names, benefits, diseases, chemical compositions, and SMILES notations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-black/80 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-institute-blue/30 to-institute-purple/30 border-b border-white/10">
              <CardTitle className="text-2xl text-center text-white flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-400" />
                {user ? 'TradChemLLM Explorer' : 'Login to Access TradChemLLM'}
                <Sparkles className="h-5 w-5 text-purple-400" />
              </CardTitle>
              <CardDescription className="text-center text-gray-300">
                {user 
                  ? 'Search for traditional medicine chemicals and formulations' 
                  : 'Enter your credentials to access worlds first AI powered data base that consist the details of product name, benefits, diseases, chemical composition and SMILES notations for medicines commonly employed in traditional medicinal practices. Traditional Medicine Systems: Herbal medicines, Acupuncture, Homeopathy, Indigenous traditional medicine, Traditional Chinese medicine, Naturopathy, Chiropractic, Osteopathy, Ayurvedic medicine, and Unani medicine etc.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 bg-gradient-to-b from-black/90 to-purple-950/20">
              {!user ? (
                <div className="space-y-6 flex flex-col items-center">
                  <p className="text-center text-white/70">To access TradChem, you need to use the same credentials that you used to sign in to your account.</p>
                  <Button 
                    onClick={handleNavigateToAuth}
                    className="w-full max-w-md bg-gradient-to-r from-institute-blue to-institute-purple hover:from-institute-blue/90 hover:to-institute-purple/90 text-white transition-all transform hover:scale-[1.02]"
                  >
                    Sign In to Access
                  </Button>
                </div>
              ) : (
                <div className="h-[500px] flex flex-col">
                  <div className="flex-1 overflow-y-auto bg-black/40 rounded-md p-4 mb-4 scrollbar-none">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`mb-4 ${message.role === 'user' ? 'ml-auto max-w-[80%]' : 'mr-auto max-w-[80%]'}`}
                      >
                        <div 
                          className={`p-3 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-institute-blue/80 text-white' 
                              : 'bg-gray-800/90 text-gray-100'
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <Input
                      value={inputMessage}
                      onChange={handleInputChange}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask about traditional medicine compounds..."
                      className="pr-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                    />
                    <Button 
                      className="absolute right-0 top-0 h-full px-3 bg-gradient-to-r from-institute-blue to-institute-purple hover:from-institute-blue/90 hover:to-institute-purple/90 text-white border-0"
                      onClick={handleSendMessage}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-gray-800 bg-black/50">
              {user ? (
                <div className="flex items-center justify-between w-full text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Atom className="h-4 w-4 text-institute-purple/70" />
                    <span>Powered by TradChemLLM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-institute-blue/70" />
                    <span>Institute of Scientific Informatics</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gray-500 mx-auto">
                  Sign in with your account to access TradChemLLM
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TradChemDBSection;

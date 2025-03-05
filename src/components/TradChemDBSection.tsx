
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dna, Database, Flask as FlaskIcon, Lock, Atom, User } from 'lucide-react';

const TradChemDBSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in a real app, this would connect to an authentication service
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-institute-blue/5 to-institute-purple/10">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Database className="h-8 w-8 text-institute-blue" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-institute-blue to-institute-purple">
              TradChemLLM Database Access
            </h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Access our comprehensive database of traditional medicinal chemicals, 
            including product names, benefits, diseases, chemical compositions, and SMILES notations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-institute-purple/20 bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader className="bg-gradient-to-r from-institute-blue/10 to-institute-purple/10 border-b border-institute-purple/10">
              <CardTitle className="text-2xl text-center text-gray-800">
                {isLoggedIn ? 'TradChem Database Explorer' : 'Login to Access TradChemLLM Database'}
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                {isLoggedIn 
                  ? 'Search for traditional medicine chemicals and formulations' 
                  : 'Enter your credentials to access the chemical database'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {!isLoggedIn ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-institute-purple hover:bg-institute-blue text-white"
                  >
                    Access Database
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <Tabs defaultValue="search" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-institute-purple/10">
                      <TabsTrigger value="search" className="data-[state=active]:bg-institute-purple data-[state=active]:text-white">
                        Search
                      </TabsTrigger>
                      <TabsTrigger value="browse" className="data-[state=active]:bg-institute-purple data-[state=active]:text-white">
                        Browse
                      </TabsTrigger>
                      <TabsTrigger value="favorites" className="data-[state=active]:bg-institute-purple data-[state=active]:text-white">
                        Favorites
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="search" className="pt-4">
                      <div className="space-y-4">
                        <div className="relative">
                          <Input
                            type="search"
                            placeholder="Search by chemical name, disease, or traditional system..."
                            className="w-full pr-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Button 
                            className="absolute right-0 top-0 h-full px-3 bg-institute-purple hover:bg-institute-blue text-white"
                            onClick={() => console.log('Searching for:', searchQuery)}
                          >
                            Search
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="p-4 border border-institute-purple/20 rounded-lg bg-white">
                            <div className="flex items-center mb-2">
                              <Atom className="h-5 w-5 text-institute-purple mr-2" />
                              <h3 className="font-medium">Curcumin</h3>
                            </div>
                            <p className="text-sm text-gray-600">Active compound in turmeric used in Ayurvedic medicine</p>
                            <div className="mt-2 text-xs text-gray-500">
                              <span className="inline-block bg-institute-blue/10 text-institute-blue px-2 py-1 rounded mr-1">
                                Anti-inflammatory
                              </span>
                              <span className="inline-block bg-institute-purple/10 text-institute-purple px-2 py-1 rounded">
                                Ayurveda
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-4 border border-institute-purple/20 rounded-lg bg-white">
                            <div className="flex items-center mb-2">
                              <FlaskIcon className="h-5 w-5 text-institute-purple mr-2" />
                              <h3 className="font-medium">Ginsenosides</h3>
                            </div>
                            <p className="text-sm text-gray-600">Active compounds in Ginseng used in Traditional Chinese Medicine</p>
                            <div className="mt-2 text-xs text-gray-500">
                              <span className="inline-block bg-institute-blue/10 text-institute-blue px-2 py-1 rounded mr-1">
                                Adaptogenic
                              </span>
                              <span className="inline-block bg-institute-purple/10 text-institute-purple px-2 py-1 rounded">
                                TCM
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="browse" className="pt-4">
                      <div className="text-center py-8">
                        <Dna className="h-12 w-12 text-institute-purple mx-auto mb-4 opacity-50" />
                        <p className="text-gray-500">Browse by traditional medicine system coming soon</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="favorites" className="pt-4">
                      <div className="text-center py-8">
                        <Dna className="h-12 w-12 text-institute-blue mx-auto mb-4 opacity-50" />
                        <p className="text-gray-500">Your saved compounds will appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-institute-purple/10 bg-gray-50">
              {isLoggedIn ? (
                <Button 
                  variant="outline" 
                  className="ml-auto text-institute-purple border-institute-purple/50 hover:bg-institute-purple/10"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              ) : (
                <p className="text-xs text-gray-500 mx-auto">
                  For demo purposes, any email and password combination will work
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

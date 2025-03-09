
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dna, Database, FlaskConical, Lock, Atom, User, UserPlus, Sparkles, Braces, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TradChemDBSectionProps {
  id?: string;
}

const TradChemDBSection = ({ id }: TradChemDBSectionProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in a real app, this would connect to an authentication service
    if (email && password) {
      setIsLoggedIn(true);
      setRegistrationError('');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/auth');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setInstitution('');
    setShowRegister(false);
    setRegistrationError('');
  };

  const toggleForm = () => {
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
                {isLoggedIn 
                  ? 'TradChem Explorer' 
                  : showRegister 
                    ? 'Create an Account' 
                    : 'Login to Access TradChemLLM'}
                <Sparkles className="h-5 w-5 text-purple-400" />
              </CardTitle>
              <CardDescription className="text-center text-gray-300">
                {isLoggedIn 
                  ? 'Search for traditional medicine chemicals and formulations' 
                  : showRegister
                    ? 'Create your account to access the TradChemLLM'
                    : 'Enter your credentials to access worlds first AI powered data base that consist the details of product_name, benefits, diseases, chemical_composition and SMILES notations for medicines commonly employed in traditional medicinal practices. Traditional Medicine Systems: Herbal medicines, Acupuncture, Homeopathy, Indigenous traditional medicine, Traditional Chinese medicine, Naturopathy, Chiropractic, Osteopathy, Ayurvedic medicine, and Unani medicine etc.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 bg-gradient-to-b from-black/90 to-purple-950/20">
              {!isLoggedIn ? (
                showRegister ? (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="register-email" className="block text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="institution" className="block text-sm font-medium text-gray-300">
                        Institution (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Database className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="institution"
                          type="text"
                          placeholder="Enter your institution (if applicable)"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="register-password" className="block text-sm font-medium text-gray-300">
                        Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="Create a password"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    {registrationError && (
                      <div className="p-3 bg-red-900/50 border border-red-700 text-red-300 rounded-md text-sm">
                        {registrationError}
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-institute-blue to-institute-purple hover:from-institute-blue/90 hover:to-institute-purple/90 text-white"
                    >
                      Create Account
                    </Button>
                    
                    <div className="text-center">
                      <Button 
                        type="button" 
                        variant="link" 
                        className="text-blue-400 hover:text-blue-300"
                        onClick={toggleForm}
                      >
                        Already have an account? Log in
                      </Button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-blue-400" />
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-institute-blue to-institute-purple hover:from-institute-blue/90 hover:to-institute-purple/90 text-white"
                    >
                      Access TradChemLLM
                    </Button>
                    
                    <div className="text-center">
                      <Button 
                        type="button" 
                        variant="link" 
                        className="text-blue-400 hover:text-blue-300"
                        onClick={toggleForm}
                      >
                        <UserPlus className="h-4 w-4 mr-1" />
                        Create a new account
                      </Button>
                    </div>
                  </form>
                )
              ) : (
                <div className="space-y-6">
                  <Tabs defaultValue="search" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-900/40 border border-gray-700">
                      <TabsTrigger 
                        value="search" 
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-institute-blue data-[state=active]:to-institute-purple data-[state=active]:text-white text-gray-300"
                      >
                        Search
                      </TabsTrigger>
                      <TabsTrigger 
                        value="browse" 
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-institute-blue data-[state=active]:to-institute-purple data-[state=active]:text-white text-gray-300"
                      >
                        Browse
                      </TabsTrigger>
                      <TabsTrigger 
                        value="favorites" 
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-institute-blue data-[state=active]:to-institute-purple data-[state=active]:text-white text-gray-300"
                      >
                        Favorites
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="search" className="pt-4">
                      <div className="space-y-4">
                        <div className="relative">
                          <Input
                            type="search"
                            placeholder="Search by chemical name, disease, or traditional system..."
                            className="w-full pr-10 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Button 
                            className="absolute right-0 top-0 h-full px-3 bg-gradient-to-r from-institute-blue to-institute-purple hover:from-institute-blue/90 hover:to-institute-purple/90 text-white border-0"
                            onClick={() => console.log('Searching for:', searchQuery)}
                          >
                            Search
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="p-4 border border-gray-700 rounded-lg bg-gray-900/40 backdrop-blur hover:bg-gray-900/60 transition-colors">
                            <div className="flex items-center mb-2">
                              <Atom className="h-5 w-5 text-blue-400 mr-2" />
                              <h3 className="font-medium text-white">Curcumin</h3>
                            </div>
                            <p className="text-sm text-gray-400">Active compound in turmeric used in Ayurvedic medicine</p>
                            <div className="mt-2 text-xs text-gray-500">
                              <span className="inline-block bg-institute-blue/20 text-blue-400 px-2 py-1 rounded mr-1">
                                Anti-inflammatory
                              </span>
                              <span className="inline-block bg-institute-purple/20 text-purple-400 px-2 py-1 rounded">
                                Ayurveda
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-4 border border-gray-700 rounded-lg bg-gray-900/40 backdrop-blur hover:bg-gray-900/60 transition-colors">
                            <div className="flex items-center mb-2">
                              <FlaskConical className="h-5 w-5 text-blue-400 mr-2" />
                              <h3 className="font-medium text-white">Ginsenosides</h3>
                            </div>
                            <p className="text-sm text-gray-400">Active compounds in Ginseng used in Traditional Chinese Medicine</p>
                            <div className="mt-2 text-xs text-gray-500">
                              <span className="inline-block bg-institute-blue/20 text-blue-400 px-2 py-1 rounded mr-1">
                                Adaptogenic
                              </span>
                              <span className="inline-block bg-institute-purple/20 text-purple-400 px-2 py-1 rounded">
                                TCM
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="browse" className="pt-4">
                      <div className="text-center py-8">
                        <Dna className="h-12 w-12 text-institute-purple mx-auto mb-4 opacity-70" />
                        <p className="text-gray-400">Browse by traditional medicine system coming soon</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="favorites" className="pt-4">
                      <div className="text-center py-8">
                        <Dna className="h-12 w-12 text-institute-blue mx-auto mb-4 opacity-70" />
                        <p className="text-gray-400">Your saved compounds will appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-gray-800 bg-black/50">
              {isLoggedIn ? (
                <Button 
                  variant="outline" 
                  className="ml-auto text-purple-400 border-purple-800/50 hover:bg-purple-950/30 bg-transparent"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              ) : (
                <p className="text-xs text-gray-500 mx-auto">
                  {showRegister 
                    ? "Fields marked with * are required" 
                    : "For demo purposes, any email and password combination will work"}
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

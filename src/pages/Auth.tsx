
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      if (isSignUp) {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
            },
          },
        });

        if (error) throw error;

        if (data) {
          setErrorMessage('Registration successful! Please check your email for verification.');
        }
      } else {
        // Sign in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        // Redirect to home page after successful login
        navigate('/');
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setErrorMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage('');
  };

  return (
    <MainLayout>
      <div className="container flex items-center justify-center py-20">
        <Card className="w-full max-w-md border border-institute-purple/20 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-gradient-to-r from-institute-blue/10 to-institute-purple/10 border-b border-institute-purple/10">
            <CardTitle className="text-2xl text-center text-gray-800">
              {isSignUp ? 'Create an Account' : 'Sign In'}
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              {isSignUp 
                ? 'Register for access to courses and resources' 
                : 'Enter your credentials to access your account'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleAuth} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required={isSignUp}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              {errorMessage && (
                <div className="p-3 bg-red-100 border border-red-200 text-red-800 rounded-md text-sm">
                  {errorMessage}
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-institute-purple hover:bg-institute-blue text-white"
                disabled={loading}
              >
                {loading 
                  ? "Processing..." 
                  : isSignUp 
                    ? "Create Account" 
                    : "Sign In"}
              </Button>
              
              <div className="text-center">
                <Button 
                  type="button" 
                  variant="link" 
                  className="text-institute-purple hover:text-institute-blue"
                  onClick={toggleAuthMode}
                >
                  {isSignUp 
                    ? "Already have an account? Sign In" 
                    : "Don't have an account? Sign Up"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Auth;

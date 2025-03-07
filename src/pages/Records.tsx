
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/UserContext';

interface PersonalRecord {
  id: string;
  user_id: string;
  course_selected: string;
  completion_percentage: number;
  course_start_date: string;
  course_end_date: string | null;
  open_source_collaborations: string;
  open_source_collaboration_percentage: number;
  success_rate: number;
  created_at?: string;
}

const Records = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [fetchingRecords, setFetchingRecords] = useState(false);
  const [records, setRecords] = useState<PersonalRecord[]>([]);
  const [formData, setFormData] = useState<Omit<PersonalRecord, 'id' | 'user_id'>>({
    course_selected: '',
    completion_percentage: 0,
    course_start_date: new Date().toISOString().split('T')[0],
    course_end_date: null,
    open_source_collaborations: '',
    open_source_collaboration_percentage: 0,
    success_rate: 0,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchRecords = async () => {
    if (!user) return;
    
    setFetchingRecords(true);
    
    try {
      const { data, error } = await supabase
        .from('personal_records')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setRecords(data || []);
    } catch (error: any) {
      console.error('Error fetching records:', error);
    } finally {
      setFetchingRecords(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    fetchRecords();
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes('percentage') || name === 'success_rate' 
        ? parseFloat(value) 
        : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const newRecord = {
        user_id: user.id,
        ...formData,
      };

      const { error } = await supabase
        .from('personal_records')
        .insert([newRecord]);

      if (error) throw error;
      
      setMessage('Record added successfully!');
      
      // Reset form
      setFormData({
        course_selected: '',
        completion_percentage: 0,
        course_start_date: new Date().toISOString().split('T')[0],
        course_end_date: null,
        open_source_collaborations: '',
        open_source_collaboration_percentage: 0,
        success_rate: 0,
      });
      
      // Refresh records
      fetchRecords();
    } catch (error: any) {
      console.error('Error adding record:', error);
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRecord = async (id: string) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('personal_records')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      
      // Refresh records
      fetchRecords();
    } catch (error: any) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <MainLayout>
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Personal Records</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form to add new record */}
            <Card className="border border-institute-purple/20 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader className="bg-gradient-to-r from-institute-blue/10 to-institute-purple/10 border-b border-institute-purple/10">
                <CardTitle className="text-xl text-gray-800">
                  Add New Record
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Track your progress on courses and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="course_selected" className="block text-sm font-medium text-gray-700">
                      Course Name
                    </label>
                    <Input
                      id="course_selected"
                      name="course_selected"
                      type="text"
                      value={formData.course_selected}
                      onChange={handleInputChange}
                      placeholder="Enter course name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="completion_percentage" className="block text-sm font-medium text-gray-700">
                      Completion Percentage
                    </label>
                    <Input
                      id="completion_percentage"
                      name="completion_percentage"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.completion_percentage}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="course_start_date" className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <Input
                      id="course_start_date"
                      name="course_start_date"
                      type="date"
                      value={formData.course_start_date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="course_end_date" className="block text-sm font-medium text-gray-700">
                      End Date (Optional)
                    </label>
                    <Input
                      id="course_end_date"
                      name="course_end_date"
                      type="date"
                      value={formData.course_end_date || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="open_source_collaborations" className="block text-sm font-medium text-gray-700">
                      Open Source Collaborations
                    </label>
                    <Input
                      id="open_source_collaborations"
                      name="open_source_collaborations"
                      type="text"
                      value={formData.open_source_collaborations}
                      onChange={handleInputChange}
                      placeholder="Enter collaboration details"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="open_source_collaboration_percentage" className="block text-sm font-medium text-gray-700">
                      Collaboration Percentage
                    </label>
                    <Input
                      id="open_source_collaboration_percentage"
                      name="open_source_collaboration_percentage"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.open_source_collaboration_percentage}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="success_rate" className="block text-sm font-medium text-gray-700">
                      Success Rate
                    </label>
                    <Input
                      id="success_rate"
                      name="success_rate"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.success_rate}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  {message && (
                    <div className="p-3 bg-green-100 border border-green-200 text-green-800 rounded-md text-sm">
                      {message}
                    </div>
                  )}
                  
                  {error && (
                    <div className="p-3 bg-red-100 border border-red-200 text-red-800 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-institute-purple hover:bg-institute-blue text-white"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Add Record"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* List of existing records */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your Records</h2>
              
              {fetchingRecords ? (
                <p className="text-gray-500">Loading records...</p>
              ) : records.length === 0 ? (
                <p className="text-gray-500">No records found. Add your first record!</p>
              ) : (
                records.map((record) => (
                  <Card key={record.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{record.course_selected}</h3>
                          <p className="text-sm text-gray-600">
                            Completion: {record.completion_percentage}%
                          </p>
                          <p className="text-sm text-gray-600">
                            Started: {new Date(record.course_start_date).toLocaleDateString()}
                          </p>
                          {record.course_end_date && (
                            <p className="text-sm text-gray-600">
                              Completed: {new Date(record.course_end_date).toLocaleDateString()}
                            </p>
                          )}
                          {record.open_source_collaborations && (
                            <p className="text-sm text-gray-600 mt-2">
                              <span className="font-medium">Collaborations:</span> {record.open_source_collaborations}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:bg-red-50 hover:text-red-600 border-red-200"
                          onClick={() => handleDeleteRecord(record.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Records;

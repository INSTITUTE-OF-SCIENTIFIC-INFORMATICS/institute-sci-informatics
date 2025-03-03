
import MainLayout from '@/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Download, BookOpen, FileText, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type ResourceType = 'study-material' | 'research-paper' | 'guide';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  downloadUrl: string;
  fileSize: string;
  dateAdded: string;
  category: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Introduction to Bioinformatics',
    description: 'A comprehensive guide to the fundamentals of bioinformatics for beginners.',
    type: 'study-material',
    downloadUrl: '#',
    fileSize: '3.2 MB',
    dateAdded: '2023-09-15',
    category: 'Bioinformatics'
  },
  {
    id: '2',
    title: 'Statistical Methods in Research',
    description: 'Advanced statistical techniques for scientific research and data analysis.',
    type: 'study-material',
    downloadUrl: '#',
    fileSize: '5.7 MB',
    dateAdded: '2023-10-22',
    category: 'Statistics'
  },
  {
    id: '3',
    title: 'Genomic Data Analysis Using Python',
    description: 'A practical guide to analyzing genomic data using Python programming.',
    type: 'guide',
    downloadUrl: '#',
    fileSize: '8.1 MB',
    dateAdded: '2023-11-05',
    category: 'Programming'
  },
  {
    id: '4',
    title: 'Comparative Analysis of Machine Learning Algorithms for Protein Structure Prediction',
    description: 'Research paper comparing various ML approaches for predicting protein structures.',
    type: 'research-paper',
    downloadUrl: '#',
    fileSize: '2.4 MB',
    dateAdded: '2023-12-10',
    category: 'Machine Learning'
  },
  {
    id: '5',
    title: 'Environmental Data Collection Methodologies',
    description: 'Best practices for collecting and managing environmental research data.',
    type: 'guide',
    downloadUrl: '#',
    fileSize: '4.3 MB',
    dateAdded: '2024-01-18',
    category: 'Environmental Science'
  },
  {
    id: '6',
    title: 'Novel Approaches to Drug Discovery Using Computational Methods',
    description: 'Recent innovations in computational drug discovery techniques and their applications.',
    type: 'research-paper',
    downloadUrl: '#',
    fileSize: '6.2 MB',
    dateAdded: '2024-02-07',
    category: 'Pharmaceutical Research'
  }
];

const ResourceTypeIcon = ({ type }: { type: ResourceType }) => {
  switch (type) {
    case 'study-material':
      return <BookOpen className="h-5 w-5 text-blue-500" />;
    case 'research-paper':
      return <FileText className="h-5 w-5 text-purple-500" />;
    case 'guide':
      return <BookMarked className="h-5 w-5 text-green-500" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all');
  
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <MainLayout>
      <div className="container py-10 md:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Academic Resources</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access study materials, research papers, and guides to support your academic journey at the Institute of Scientific Informatics.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources by title, description or category..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Button 
              variant={selectedType === 'all' ? 'default' : 'outline'} 
              onClick={() => setSelectedType('all')}
            >
              All
            </Button>
            <Button 
              variant={selectedType === 'study-material' ? 'default' : 'outline'} 
              onClick={() => setSelectedType('study-material')}
              className="flex gap-2 items-center"
            >
              <BookOpen className="h-4 w-4" />
              <span>Study Materials</span>
            </Button>
            <Button 
              variant={selectedType === 'research-paper' ? 'default' : 'outline'} 
              onClick={() => setSelectedType('research-paper')}
              className="flex gap-2 items-center"
            >
              <FileText className="h-4 w-4" />
              <span>Research Papers</span>
            </Button>
            <Button 
              variant={selectedType === 'guide' ? 'default' : 'outline'} 
              onClick={() => setSelectedType('guide')}
              className="flex gap-2 items-center"
            >
              <BookMarked className="h-4 w-4" />
              <span>Guides</span>
            </Button>
          </div>
        </div>
        
        {filteredResources.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-muted-foreground">No resources found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <ResourceTypeIcon type={resource.type} />
                    <span className="text-sm font-medium text-muted-foreground capitalize">
                      {resource.type.replace('-', ' ')}
                    </span>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm pb-3">
                  <p className="mb-1"><span className="font-medium">Category:</span> {resource.category}</p>
                  <p className="mb-1"><span className="font-medium">File size:</span> {resource.fileSize}</p>
                  <p><span className="font-medium">Added:</span> {resource.dateAdded}</p>
                </CardContent>
                <CardFooter className={cn(
                  "bg-muted/50 pt-3 pb-3",
                  resource.type === 'study-material' && "bg-blue-50",
                  resource.type === 'research-paper' && "bg-purple-50",
                  resource.type === 'guide' && "bg-green-50",
                )}>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href={resource.downloadUrl} download>
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Resources;

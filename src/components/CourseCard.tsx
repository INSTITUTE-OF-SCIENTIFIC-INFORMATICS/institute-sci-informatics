
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: "Free" | "Paid" | "Featured";
  duration: string;
  students: number;
  rating: number;
  maxRating: number;
}

const CourseCard = ({
  title,
  description,
  image,
  category,
  duration,
  students,
  rating,
  maxRating
}: CourseCardProps) => {
  // Map category to badge variant
  const badgeVariant = 
    category === "Free" ? "secondary" :
    category === "Paid" ? "default" :
    "outline";
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full animate-scale-in">
      {/* Course Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge 
          variant={badgeVariant}
          className="absolute top-3 right-3"
        >
          {category}
        </Badge>
      </div>
      
      {/* Course Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">
          {description}
        </p>
        
        {/* Course Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: maxRating }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        
        <Button className="w-full">View Course</Button>
      </div>
    </div>
  );
};

export default CourseCard;

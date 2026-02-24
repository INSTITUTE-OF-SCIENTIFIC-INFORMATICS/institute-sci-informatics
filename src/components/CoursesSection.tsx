import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code2, Atom, ArrowRight } from 'lucide-react';

const courses = [
  {
    icon: BookOpen,
    level: 'Beginner',
    title: 'Basics of Cheminformatics',
    description: 'Build a solid foundation in cheminformatics — learn core concepts, molecular representations, and essential computational tools.',
    topics: ['Molecular Representations', 'Chemical Databases', 'SMILES & InChI', 'Basic Property Prediction'],
    color: 'from-institute-blue/20 to-institute-blue/5',
    iconColor: 'text-institute-blue',
  },
  {
    icon: Code2,
    level: 'Intermediate',
    title: 'Open Source in Cheminformatics',
    description: 'Learn to contribute to open source cheminformatics projects, find opportunities, and grow your career in scientific computing.',
    topics: ['Contributing to OSS Projects', 'Training Programs', 'Career Opportunities', 'Community Building'],
    color: 'from-institute-purple/20 to-institute-purple/5',
    iconColor: 'text-institute-purple',
  },
  {
    icon: Atom,
    level: 'Advanced',
    title: 'Advanced Research in Cheminformatics',
    description: 'Master cutting-edge techniques in drug discovery, AI-driven methodologies, molecular simulations, and industry-driven research.',
    topics: ['Pharmacophores', 'AI Drug Discovery', 'Docking & Dynamics', 'Industry Research'],
    color: 'from-institute-teal/20 to-institute-teal/5',
    iconColor: 'text-institute-teal',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-primary font-semibold tracking-widest mb-3">
            Learning Paths
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cheminformatics Courses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Structured courses from fundamentals to advanced research — designed for students, researchers, and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.title} className={`p-8 bg-gradient-to-b ${course.color} border-white/5 hover:border-white/20 transition-all duration-300 group`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${course.iconColor}`}>
                  <course.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{course.level}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.description}</p>

              <div className="space-y-2 mb-8">
                {course.topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {topic}
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary group-hover:bg-white/5">
                Explore Course
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

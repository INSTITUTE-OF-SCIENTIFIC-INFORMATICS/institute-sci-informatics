import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code2, Atom, ArrowRight, Star } from 'lucide-react';

const courses = [
  {
    icon: BookOpen,
    level: 'Beginner',
    title: 'Basics of Cheminformatics',
    description: 'Build a solid foundation — learn core concepts, molecular representations, and essential computational tools.',
    topics: ['Molecular Representations', 'Chemical Databases', 'SMILES & InChI', 'Basic Property Prediction'],
    levelColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
    accentColor: 'from-emerald-500/20 to-emerald-500/5',
    dotColor: 'bg-emerald-400',
    btnClass: 'bg-emerald-400 hover:bg-emerald-400/90 text-emerald-950',
    topGlow: 'from-emerald-400',
  },
  {
    icon: Code2,
    level: 'Intermediate',
    title: 'Open Source in Cheminformatics',
    description: 'Learn to contribute to open source cheminformatics projects and grow your career in scientific computing.',
    topics: ['Contributing to OSS Projects', 'Training Programs', 'Career Opportunities', 'Community Building'],
    levelColor: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
    accentColor: 'from-sky-500/20 to-sky-500/5',
    dotColor: 'bg-sky-400',
    btnClass: 'bg-sky-400 hover:bg-sky-400/90 text-sky-950',
    topGlow: 'from-sky-400',
  },
  {
    icon: Atom,
    level: 'Advanced',
    title: 'Advanced Research in Cheminformatics',
    description: 'Master cutting-edge techniques in drug discovery, AI-driven methodologies, molecular simulations, and industry research.',
    topics: ['Pharmacophores & Network Pharmacology', 'AI Drug Discovery', 'Docking & Dynamics', 'Individual Research Project', 'Publications & Career Opportunities'],
    levelColor: 'text-violet-400 bg-violet-400/10 border-violet-400/25',
    accentColor: 'from-violet-500/20 to-violet-500/5',
    dotColor: 'bg-violet-400',
    btnClass: 'bg-violet-400 hover:bg-violet-400/90 text-violet-950',
    topGlow: 'from-violet-400',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-2 text-xs font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Institute of Scientific Informatics
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-orange-950 font-mono text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded-full mb-8 shadow-lg shadow-amber-500/30">
            <Star className="h-3.5 w-3.5" />
            1st Day Session is Absolutely Free
            <Star className="h-3.5 w-3.5" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Cheminformatics{' '}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three structured courses — from foundational concepts to advanced AI-driven drug discovery — built for scientists and engineers.
          </p>
        </div>

        {/* Level pills */}
        <div className="flex justify-center gap-3 flex-wrap mb-14">
          {[
            { label: 'Beginner', cls: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/5' },
            { label: 'Intermediate', cls: 'text-sky-400 border-sky-400/40 bg-sky-400/5' },
            { label: 'Advanced', cls: 'text-violet-400 border-violet-400/40 bg-violet-400/5' },
          ].map((pill) => (
            <span key={pill.label} className={`font-mono text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border ${pill.cls}`}>
              {pill.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.title}
              className={`relative p-8 bg-gradient-to-b ${course.accentColor} border-white/5 hover:border-white/20 transition-all duration-300 group overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${course.topGlow} to-transparent`} />

              {/* Free ribbon */}
              <div className="absolute top-4 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-orange-950 font-mono text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-l shadow-lg">
                1st Day Free
              </div>

              <span className={`inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${course.levelColor}`}>
                {course.level}
              </span>

              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.description}</p>

              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Topics Covered</p>
              <div className="space-y-2.5 mb-8">
                {course.topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${course.dotColor}`} />
                    {topic}
                  </div>
                ))}
              </div>

              <Button className={`w-full font-mono uppercase tracking-wider text-sm ${course.btnClass}`}>
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

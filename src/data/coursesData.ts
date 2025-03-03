export interface CourseType {
  title: string;
  description: string;
  image: string;
  category: "Free" | "Paid" | "Featured";
  duration: string;
  students: number;
  rating: number;
  maxRating: number;
}

// Course data
export const courses: CourseType[] = [
  {
    title: "Open Source Revolution in Drug Discovery",
    description: "Join a global collaboration to develop tools and analyze data for breakthrough medicines. Make a real impact on global health while building your portfolio.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free",
    duration: "8 weeks",
    students: 0,
    rating: 5,
    maxRating: 5
  },
  {
    title: "Introduction to Cheminformatics",
    description: "Learn the foundations of chemical information handling and computational methods for chemical data analysis.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free",
    duration: "6 weeks",
    students: 1250,
    rating: 4,
    maxRating: 5
  },
  {
    title: "Advanced Computational Chemistry",
    description: "Master advanced techniques in molecular modeling, quantum chemistry, and drug discovery algorithms.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Paid",
    duration: "10 weeks",
    students: 856,
    rating: 5,
    maxRating: 5
  },
  {
    title: "Data Science for Chemists",
    description: "Apply machine learning and data analytics approaches to solve complex chemical problems and derive insights.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Paid",
    duration: "8 weeks",
    students: 1120,
    rating: 4,
    maxRating: 5
  },
  {
    title: "Scientific Python Programming",
    description: "Learn Python programming with focus on scientific libraries like NumPy, SciPy, and Matplotlib for scientific computing.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free",
    duration: "6 weeks",
    students: 2350,
    rating: 5,
    maxRating: 5
  },
  {
    title: "Molecular Visualization Techniques",
    description: "Explore tools and techniques for effective visualization of molecular structures and simulation data.",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Paid",
    duration: "4 weeks",
    students: 780,
    rating: 4,
    maxRating: 5
  },
  {
    title: "Research Methods in Informatics",
    description: "Develop essential research skills for conducting and publishing scientific studies in informatics.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free",
    duration: "5 weeks",
    students: 925,
    rating: 4,
    maxRating: 5
  }
];

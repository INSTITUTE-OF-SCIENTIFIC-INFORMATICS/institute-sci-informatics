
export type Testimonial = {
  id: number;
  name: string;
  program: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Perera",
    program: "M.Sc. Bioinformatics",
    quote: "The hands-on experience from the bioinformatics program gave me the confidence to pursue my research in genomics. The instructors are truly supportive and knowledgeable.",
    image: "https://via.placeholder.com/150?text=Amara"
  },
  {
    id: 2,
    name: "Rahul Gupta",
    program: "Ph.D. Candidate, Molecular Biology",
    quote: "The supervision I received was exceptional. My supervisor's guidance helped me publish my research in top-tier journals and open doors to international collaborations.",
    image: "https://via.placeholder.com/150?text=Rahul"
  },
  {
    id: 3,
    name: "Tharindu Fernando",
    program: "B.Sc. Applied Statistics",
    quote: "The applied statistics course perfectly balanced theory with practical applications. The skills I gained in data analysis have been invaluable in my current role in public health research.",
    image: "https://via.placeholder.com/150?text=Tharindu"
  },
  {
    id: 4,
    name: "Zainab Ahmed",
    program: "M.Sc. Environmental Science",
    quote: "The field work components and laboratory sessions gave me practical insights that textbooks alone couldn't provide. I now lead environmental impact assessments with confidence.",
    image: "https://via.placeholder.com/150?text=Zainab"
  }
];

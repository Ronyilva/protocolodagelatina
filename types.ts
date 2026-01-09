
export interface PageCopy {
  preHeadline: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaSubtext: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  likes: number;
  time: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

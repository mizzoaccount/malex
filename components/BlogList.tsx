import React from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    image: '/images/blog1.jpg',
    title: 'Exploring the World of React',
    description: 'A deep dive into React and how to master it.',
    category: 'React',
    date: 'Jan 15, 2025',
    author: 'John Doe',
  },
  {
    image: '/images/blog2.jpg',
    title: 'Understanding TypeScript',
    description: 'Why TypeScript is a must-learn for JavaScript developers.',
    category: 'TypeScript',
    date: 'Jan 18, 2025',
    author: 'Jane Smith',
  },
  {
    image: '/images/blog3.jpg',
    title: 'Tailwind CSS for Beginners',
    description: 'A beginner’s guide to Tailwind CSS and utility-first design.',
    category: 'CSS',
    date: 'Jan 20, 2025',
    author: 'Mark Lee',
  },
  {
    image: '/images/blog1.jpg',
    title: 'Exploring the World of React',
    description: 'A deep dive into React and how to master it.',
    category: 'React',
    date: 'Jan 15, 2025',
    author: 'John Doe',
  },
  {
    image: '/images/blog2.jpg',
    title: 'Understanding TypeScript',
    description: 'Why TypeScript is a must-learn for JavaScript developers.',
    category: 'TypeScript',
    date: 'Jan 18, 2025',
    author: 'Jane Smith',
  },
  {
    image: '/images/blog3.jpg',
    title: 'Tailwind CSS for Beginners',
    description: 'A beginner’s guide to Tailwind CSS and utility-first design.',
    category: 'CSS',
    date: 'Jan 20, 2025',
    author: 'Mark Lee',
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogList;


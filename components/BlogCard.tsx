import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, category, date, author }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-4 py-3">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-2">{description}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <div className="text-sm text-gray-500">By {author}</div>
        </div>
      </div>
    );
  };
  
export default BlogCard;

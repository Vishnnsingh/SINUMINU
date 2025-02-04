import React from 'react';

const BlogSection = ({blogs}) => {
 

  return (
    <div className="p-8 bg-gray-50 min-h-screen ">
      <h2 className="text-4xl font-bold text-center text-gray-900">Our blog</h2>
      <p className="text-center text-gray-500 mt-2 mb-8">Learn how to grow your business with our expert advice.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-500 cursor-pointer">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{blog.date} <span className="bg-gray-200 rounded-full px-2 py-1 ml-2 text-xs">{blog.category}</span></p>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <div className="flex items-center mt-4">
                <img src={blog.authorImage} alt={blog.author} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-bold text-gray-900">{blog.author}</p>
                  <p className="text-sm text-gray-500">{blog.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

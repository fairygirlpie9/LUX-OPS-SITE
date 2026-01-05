import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight } from '@phosphor-icons/react';

const Blog: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <div className="py-16 md:py-24 px-4 md:px-6 text-center border-b border-white/10 bg-panel">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 uppercase">Mission Logs</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-mono">
          Updates, insights, and case studies from the field.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group border border-white/10 bg-black p-6 md:p-8 hover:border-electric transition-colors">
              <div className="text-electric font-mono text-xs uppercase mb-4">{post.date} // {post.author}</div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase leading-tight group-hover:text-electric transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-white font-mono text-sm uppercase font-bold hover:text-electric">
                Read Full Briefing <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-4xl text-white font-display mb-4">Briefing Not Found</h1>
        <Link to="/blog"><Button>Return to Logs</Button></Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-electric mb-8 font-mono text-sm uppercase">
          <ArrowLeft size={16} /> Back to Logs
        </Link>
        
        <div className="mb-8 md:mb-12">
          <div className="text-electric font-mono text-sm uppercase mb-4 tracking-wider">{post.date} // {post.author}</div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-8 uppercase leading-tight">
            {post.title}
          </h1>
          {post.image && (
            <div className="w-full aspect-video bg-gray-900 mb-8 md:mb-12 border border-white/10 relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80" />
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-mono text-gray-300">
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        <div className="mt-16 md:mt-24 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase">Ready To Build Yours?</h3>
          <Link to="/contact">
            <Button>Schedule Briefing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
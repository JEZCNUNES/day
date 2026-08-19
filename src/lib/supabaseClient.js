import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper: Fetch all blog posts from Supabase (or fallback to local)
export async function fetchBlogPostsFromSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase fetch warning:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error('Supabase fetch error:', err);
    return null;
  }
}

// Helper: Save/Update post in Supabase
export async function saveBlogPostToSupabase(post) {
  if (!isSupabaseConfigured || !supabase) {
    return null;
  }

  try {
    const payload = {
      id: post.id,
      slug: post.slug,
      title: post.title,
      category: post.category,
      read_time: post.readTime,
      cover_image: post.coverImage,
      cover_fit: post.coverFit || 'object-top',
      excerpt: post.excerpt,
      tldr: post.tldr,
      content: post.content,
      author: post.author,
      published_at: post.publishedAt,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('posts')
      .upsert(payload, { onConflict: 'id' })
      .select()
      .single();

    if (error) {
      console.error('Supabase save error:', error.message);
      throw error;
    }
    return data;
  } catch (err) {
    console.error('Error saving post to Supabase:', err);
    throw err;
  }
}

// Helper: Delete post from Supabase
export async function deleteBlogPostFromSupabase(postId) {
  if (!isSupabaseConfigured || !supabase) {
    return false;
  }

  try {
    const { error } = await supabase.from('posts').delete().eq('id', postId);
    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Error deleting post from Supabase:', err);
    return false;
  }
}

// Helper: Upload cover photo to Supabase Storage Bucket ('blog-images')
export async function uploadBlogImageToSupabase(file) {
  if (!isSupabaseConfigured || !supabase) {
    return null;
  }

  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `covers/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file, { cacheControl: '3600', upsert: true });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
    return data.publicUrl;
  } catch (err) {
    console.error('Supabase Image Upload Error:', err);
    throw err;
  }
}

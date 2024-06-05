<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Filters\BlogPosts\PostsFilter;
use App\Http\Requests\BlogPosts\StorePostRequest;
use App\Http\Resources\BlogPost\BlogPostsResource;
use App\Http\Resources\BlogPost\BlogPostsCollection;

class BlogPostController extends Controller
{
    public function index(Request $request)
    {
        $filter = new PostsFilter();
        $filterQuery = $filter->transform($request);

        $posts = BlogPost::where($filterQuery);

        return new BlogPostsCollection($posts->paginate(10)->appends($request->query()));
    }

    public function store(StorePostRequest $request)
    {
        $data = $request->validated();
        if (!$data['post_image']) {
            return response()->json(['error' => 'Image is required'], 422);
        }

        $image = $data['post_image'];
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/posts'), $imageName);
        $data['post_image'] = $imageName;
        $data['slug'] = Str::slug($data['title']);

        BlogPost::create($data);
        return response()->json(['message' => 'Post created successfully'], 201);
    }

    public function show($slug)
    {
        $post = BlogPost::where('slug', $slug)->first();
        if (!$post) {
            return response()->json(['message' => 'Post Not Found'], 404);
        }
        return new BlogPostsResource($post);
    }
}

# Blog App

Create a basic blog app using React and TypeScript. The app will have the following pages: a blog post list page, a blog post detail page, a new blog post page, and an edit blog post page.

## Requirements

#### Blog Post List

- Display a paginated list of blog posts, including their titles, excerpts, and an image.
- Clicking on a blog post should redirect the user to the blog post detail page.
- (Bonus) Add a search bar to filter the blog post list by title.

#### Blog Post Detail Page

- Display the blog post's title, content, image, and creation date.
- Include a button to edit the blog post.
- Include a button to delete the blog post.

#### New Blog Post Page

- Include a form to create a new blog post with the following fields:
  - Title (required)
  - Content (required)
  - Image URL (optional)
- On successful submission, redirect the user to the blog post detail page.
- (Bonus) Add a WYSIWYG editor for the content field.

#### Edit Blog Post Page

- Include a form (same as the new blog post page).
- On successful submission, redirect the user back to the blog post detail page.

#### Styling

- Apply styling to all pages and ensure they have a responsive design.

## API

Implement the app using local storage. Use [seed data](./blog-app-seed.json) to populate the database. Support all CRUD operations and persist them in local storage.

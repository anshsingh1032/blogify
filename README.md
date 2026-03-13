# 🚀 Blogify

A modern, full-stack blogging platform where users can create, edit, and manage blog posts with authentication, rich content editing, and media support. **Blogify** is designed as a scalable and developer-friendly blogging application built using modern web technologies.

---
<div align="center">

## ⚡ The Live Application

<p>Experience the fluid animations, glassmorphism UI, and responsive grid layout directly in your browser.</p>

<a href="https://blogify-ten-theta.vercel.app" target="_blank">
  <img src="https://img.shields.io/badge/Experience_MegaBlog-FFFFFF?style=for-the-badge&logo=react&logoColor=black" alt="Experience MegaBlog" />
</a>

<br/>

</div>

# 📖 Project Overview

**Blogify** is a full-featured blogging platform that allows users to publish articles, manage content, and explore posts created by others.

### 🎯 Purpose

The project demonstrates how to build a **modern full-stack blogging application** with authentication, media uploads, and dynamic content rendering.

### ✨ Key Features

* 🔐 User authentication (signup, login, logout)
* 📝 Create, edit, and delete blog posts
* 🖼 Upload featured images for posts
* 📚 Rich text blog content support
* 🔎 Search and explore blog posts
* 🏷 Tagging system for posts
* 📱 Responsive UI
* ⚡ Fast client-side routing
* ☁️ Cloud storage for media

### 👥 Target Audience

* Developers learning full-stack web development
* Bloggers wanting a lightweight publishing platform
* Students building portfolio projects
* Anyone interested in modern React + backend services architecture

---

# 🧰 Tech Stack

### Frontend

* **React**
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **HTML React Parser**

### Backend / Services

* **Appwrite** (Authentication, Database, Storage)

### Database

* **Appwrite Database (NoSQL document storage)**

### Hosting

* **Vercel** (Frontend)
* **Appwrite Cloud / Self-hosted Appwrite**

### Developer Tools

* Git
* Node.js
* npm
* Prettier

---

# ⚙️ Getting Started

## 📋 Prerequisites

Make sure you have the following installed:

* Node.js (>=18)
* npm or yarn
* Git
* Appwrite account

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/anshsingh1032/blogify.git
cd blogify
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Setup

Create a `.env` file in the project root.

Example:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

---

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open the app:

```
http://localhost:5173
```

---

# 💡 Usage

## 📝 Creating a Post

1. Login or create an account
2. Navigate to **Create Post**
3. Add title, content, and image
4. Publish the post

## ✏️ Editing a Post

1. Open your post
2. Click **Edit**
3. Modify content
4. Save changes

## 🗑 Deleting a Post

1. Open your post
2. Click **Delete**
3. Confirm deletion

## 🏷 Tagging

Posts can include tags to categorize content.

Example tags:

```
#react #javascript #webdev
```

## 🔎 Searching Posts

Users can search posts using keywords or tags.

---

# 📡 API Reference

Blogify uses **Appwrite SDK** to interact with backend services.

### Authentication

#### Login

```javascript
authService.login({
  email: "user@example.com",
  password: "password"
})
```

#### Get Current User

```javascript
authService.getCurrentUser()
```

---

### Posts

#### Get All Posts

```javascript
appwriteService.getPosts()
```

Response Example:

```json
{
  "documents": [
    {
      "$id": "123",
      "title": "My First Blog",
      "content": "Hello world",
      "featuredImage": "imageId"
    }
  ]
}
```

---

#### Get Single Post

```javascript
appwriteService.getPost(postId)
```

---

#### Delete Post

```javascript
appwriteService.deletePost(postId)
```

---

# 🧪 Testing

Run tests:

```bash
npm run test
```

Recommended testing tools:

* **Jest**
* **React Testing Library**

Expected coverage:

```
> 80% coverage for components and services
```

---

# 🚀 Deployment

## Build Project

```bash
npm run build
```

This generates the **production build** inside the `dist` folder.

---

## Hosting Options

### Vercel (Recommended)

1. Push repo to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Netlify

```bash
npm run build
```

Upload the `dist` folder.

---

# 📂 Project Structure

```
Blogify
│
├── public
│
├── src
│   │
│   ├── appwrite
│   │   ├── auth.js
│   │   └── conf.js
│   │
│   ├── components
│   │   ├── container
│   │   |    └── Container.jsx
│   │   ├── Footer
│   │   |   └──Footer.jsx
│   │   ├── Header
│   │   |   ├── Header.jsx
│   │   |   └── LogoutButton.jsx
│   │   ├── post-form
│   │   |   └──PostForm.jsx
|   |   ├── AuthLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Index.js
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Logo.jsx
│   │   ├── PostCard.jsx
│   │   ├── RTE.jsx
│   │   ├── Select.jsx
│   │   └── Signup.jsx
│   ├── conf
|   |   └── conf.js
|   |   
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── AllPosts.jsx
│   │   ├── Post.jsx
│   │   ├── EditPost.jsx
│   │   ├── AddPost.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── store
│   │   ├── authSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── .env
├── package.json
├── LICENSE
├── vercel.json
└── README.md
```

---

# 🤝 Contributing

Contributions are welcome!

### Steps to Contribute

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "feat: add new feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📜 Code of Conduct

Please follow respectful and collaborative behavior when contributing.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 📬 Contact

Developer: **Ansh Singh**

GitHub:

```
https://github.com/anshsingh1032
```

---


⭐ If you find this project useful, consider **starring the repository**.

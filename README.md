# NoteHub

A note management web application built with **Next.js** and **TypeScript** as part of my GoIT Full Stack Developer training.

The application allows users to browse, search, filter, create, edit, and delete notes through a REST API.

## 🚀 Live Demo

Add your deployed application URL here:

```text
https://your-notehub-demo.vercel.app
```

## 🛠 Technologies

* **Next.js**
* **React**
* **TypeScript**
* **TanStack Query**
* **Axios**
* **Formik**
* **Yup**
* **React Paginate**
* **use-debounce**
* **Zustand**
* **REST API**
* **CSS Modules**
* **Vercel**

## ✨ Features

* Display a list of notes
* Search notes
* Filter notes by tag
* Pagination
* View a single note
* Create a new note
* Edit an existing note
* Delete notes
* Loading states
* Error handling
* Responsive interface
* Save note drafts in `localStorage`

## 🔎 Search & Filtering

The application provides note search with a **300 ms debounce** to avoid unnecessary API requests while the user is typing.

Notes can also be filtered by tags:

* Todo
* Work
* Personal
* Meeting
* Shopping

The `All` option displays notes without applying a tag filter.

## 📄 Pagination

Notes are displayed using pagination with **12 notes per page**.

The pagination state is synchronized with the application's data-fetching logic.

## ⚡ Data Fetching

The project uses **TanStack Query** for server-state management.

It handles:

* Fetching notes
* Fetching individual notes
* Creating notes
* Updating notes
* Deleting notes
* Loading and error states
* Query caching
* Query invalidation

The application also uses **prefetching and HydrationBoundary** to improve the integration between server-side rendering and client-side data fetching.

## 💾 Draft Persistence

An unfinished note can be saved as a draft in `localStorage`.

This allows the user to restore the draft after refreshing the page instead of losing the entered content.

## 🧭 Routing

The application uses the Next.js App Router with dynamic and catch-all routes.

Examples:

```text
/notes
/notes/[id]
/notes/filter/[...slug]
```

The routing structure allows notes to be displayed, filtered, and accessed individually.

## 📁 Main Project Structure

```text
app/
├── notes/
│   ├── page.tsx
│   ├── loading.tsx
│   ├── [id]/
│   └── filter/
│       └── [...slug]/
│
components/
├── Notes/
├── NoteForm/
├── Pagination/
└── ...

lib/
├── api/
└── store/

types/
└── note.ts
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Volodymyr-2356/05-notehub.git
```

Navigate to the project directory:

```bash
cd 05-notehub
```

Install dependencies:

```bash
npm install
```

## 🔧 Environment Variables

Create a `.env` file and add the API configuration required by the project.

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📚 What I Practiced

This project helped me practice:

* Next.js App Router
* Dynamic routes
* Catch-all routes
* Server and client components
* REST API integration
* TanStack Query
* Server-side data prefetching
* HydrationBoundary
* Query caching and invalidation
* Debounced search
* Pagination
* Form validation
* LocalStorage persistence
* TypeScript
* Responsive UI development
* Vercel deployment

## 👨‍💻 Author

**Volodymyr**

Junior Frontend Developer

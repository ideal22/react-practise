import PostDetail from './components/PostDetail'
import About from './pages/About'
import AllComments from './pages/AllComments'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import Photos from './pages/Photos'
import Posts from './pages/Posts'

export const routes = [
  {
    path: '',
    isIndex: true,
    Element: Home,
  },
  {
    path: 'about',
    isIndex: false,
    Element: About,
  },
  {
    path: 'posts',
    isIndex: false,
    Element: Posts,
  },
  {
    path: 'posts/:id',
    isIndex: false,
    Element: PostDetail,
  },
  {
    path: 'login',
    isIndex: false,
    Element: Login,
  },

  {
    path: 'comments',
    isIndex: false,
    Element: AllComments,
  },
  {
    path: 'photos',
    isIndex: false,
    Element: Photos,
  },
  {
    path: '*',
    isIndex: false,
    Element: NotFoundPage,
  },
]

export const privateRouts = [
  {
    path: 'posts/new',
    Element: CreatePost,
  },
  {
    path: 'posts/edit',
    Element: EditPost,
  },
]

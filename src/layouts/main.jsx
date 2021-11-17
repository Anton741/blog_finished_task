import { useParams } from "react-router";
import Header from "../components/header";
import Home from "../components/pages/homePage/home";
import About from "../components/pages/aboutBlog/about";
import Footer from "../components/Footer/footer"
const Main = () => {
  const params = useParams()
  const {about} = params
  return ( 
    <>
    <Header/>
  {about ? <About/> 
  : <> 
      <Home/>
      <Footer/>
    </>
  }
  
  </>
  );
}

export default Main;

// import Search from "../components/search"
// import ArticlePage from '../components/pages/articlePage'
// const Main = () => {
//   const params = useParams();
//     const {articleId} = params
//   return (
//   <>
//   {articleId ? <ArticlePage articleId={articleId} /> : <Search />}
//   </> 
//   )};

// export default Main;
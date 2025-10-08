import { Helmet } from "react-helmet-async"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import  {readCategories}  from "../../redux/categories/categoriesActions"
import  {readBlogs,readBlogsByCategoty,readBlogsByCategotyPage,
        readBlogsPages,
        readPost,searchPost,searchPostPage}  from "../../redux/blog/blogActions"
import CategoryHeader from "../../components/blog/CategoryHeader"
import ListBlog from "../../components/blog/ListBlog"


function Blog() {
    const categories = useSelector((state) => state.categories)
    const blogs = useSelector((state) => state.blogs)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(readCategories())
        dispatch(readBlogs())
    }, [dispatch]
    )



return (
    <div className="py-2 px-8 mx-14 " style={{ marginTop: "75px" }} >
        <Helmet>
            <title>FullStack | Blog</title>
            <meta name="description" content="Agencia de software y marketing digital Creacion de paginas web y desarrollo de aplicaciones" />
            <meta name="keywords" content="desarrollo web, diseño web, desarrollo de sitios web, aplicaciones web, React, Node.js, HTML5, CSS3, JavaScript, diseño responsive, optimización SEO, desarrollo full stack, páginas web profesionales, landing pages, tiendas online" />
            <meta name="robots" content="all" />
            <link rel="canonical" href="" />
            <meta name="author" content="FullStack" />
            <meta name="publisher" content="FullStack" />

            <meta property="og:title" content="Desarrollo Web Profesional | FullStack" />
            <meta property="og:description" content="Creamos sitios web rápidos, modernos y optimizados para buscadores. Soluciones web a medida con tecnologías como React y Node.js." />
            <meta property="og:image" content="https://tusitio.com/img/preview.jpg" />
            <meta property="og:url" content="https://tusitio.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Desarrollo Web Profesional | Mi Empresa" />
            <meta name="twitter:description" content="Creamos sitios web rápidos, modernos y optimizados para buscadores. Soluciones web a medida con tecnologías como React y Node.js." />
            <meta name="twitter:image" content="https://tusitio.com/img/preview.jpg" />
            <meta name="twitter:site" content="@TuCuentaTwitter" />

        </Helmet>

        {categories && <CategoryHeader categories={categories.data.Categories} />}

        {blogs &&  <ListBlog blogs={blogs.blog_list}  count={blogs.count && blogs.count}/>}
        

    </div>


)
}




export default Blog
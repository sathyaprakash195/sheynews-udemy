import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';

function NewsDesc() {
    const [loading, setLoading] = useState(false);
    const [newsItem , setNewsItem]=useState(null)
    const getData = async () => {
        setLoading(true);
        try {
          const result = await axios.post("/api/newsitems/getnewsitembyid" , {newsid : params.newsid});
          setNewsItem(result.data);
          setLoading(false);
          
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      useEffect(() => {
        getData();
      }, []);
    const params = useParams()
    return (
      <Layout>
           {loading ? (<Spinner />) : (
               <div className='p-5'>
                   <h1 className='my-3 text-2xl font-semibold'>{newsItem!==null && newsItem.title}</h1>
                   <hr />
                  {newsItem!==null && ReactHtmlParser(draftToHtml(JSON.parse(newsItem.content)))}
               </div>
           )}
      </Layout>
    )
}

export default NewsDesc

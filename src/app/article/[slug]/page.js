import data from "../../data.json";
import styles from "../../page.module.css";
import ArticleTextDisplay from "../../component/ArticleTextDisplay";
import { formatDateForArticle } from "../../component/utils";
export default function Article({params}) {
  const slug = params.slug;
  const articleData = data.find((article) => slug === article.id);

    return (
      <main>
        <div 
        className={styles.articlePageHeaderWrapper} 
        style={{
          backgroundImage: `url(${articleData.image.url})`
        }}>
        <h1>{articleData.title}</h1>
        <p>{formatDateForArticle(articleData.publishedDate)}</p>
        <p className={styles.articleDayWrapper}>{articleData.blurb}</p>
        </div>
        <div 
        className={styles.articleTextWrapper} >
        {articleData.articleText?.map((text, i) => (
        <ArticleTextDisplay key={i} data={text.data} type= {text.type} />
        ))}</div>
        </main>
    );
  }
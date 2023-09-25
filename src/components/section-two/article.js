import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

function Article({ articles, background, hover }) {
  return (
    <>
      {articles.map((article) => (
        <article
          key={article.num}
          className={`our-speciallization-articles > article ${
            hover(article.num) ? "growArticle" : ""
          }`}
          onMouseEnter={() => background(article.num)}
        >
          <div className="our-speciallization-articles-image">
            <img src={hover(article.num) ? article.imgOrange : article.img} />
          </div>
          <div className="our-speciallization-articles-title">
            <h2>{article.title}</h2>
            <p>{article.des}</p>
            <button
              className={`our-speciallization-articles-title > button ${
                hover(article.num) ? "backgroundHover" : ""
              }`}
            >
              <a href="/services">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{
                    color: "#112d4e",
                  }}
                />
              </a>
            </button>
          </div>
        </article>
      ))}
    </>
  );
}

export default Article;

import React, { Component } from 'react'
import "./global.css"

export default class Article extends Component {
  render() {
    return (
      <>
      <div className='Article-div'>
      <h1 className='uppercase latest-article'>
          latest article
        </h1>

        <div className='tips'>
          <article className='article-1 art-hov border-r'>
            <a href="https://thecodedose.com/blog/deploying-react-projects-online/" target='_blank'> 
              <div>
                <img className='article-img1' src="https://thecodedose.com/assets/deploy-react-projects.jpeg" alt="" />
                  <div>
                    <h2 className='article-box1'><a className='a-box1' href="https://thecodedose.com/blog/deploying-react-projects-online/" target='_blank'> 4 Ways to Deploy Your Personal React Projects for Free </a></h2>
                  </div>
              </div>
            </a>
          </article>
          <article className='article-2 art-hov border-r'>
            <a href="https://thecodedose.com/blog/8-things-i-bought-from-amazon-for-my-home-office-setup/" target='_blank'>
              <div>
              <img className='article-img2' src="https://thecodedose.com/assets/thing-i-bought-from-amazon.png" alt="" />
                  <div>
                    <h2 className='article-box1'><a className='a-box1' href="https://thecodedose.com/blog/8-things-i-bought-from-amazon-for-my-home-office-setup/">8 Things I Bought For My Home Office Setup</a></h2>
                  </div>
              </div>
            </a>
          </article>
          <article className='article-3 art-hov border-r'>
            <a href="https://thecodedose.com/blog/creating-your-first-ai-chatbot-using-python/" target='_blank'>
              <div>
                <img className='article-img3' src="https://thecodedose.com/assets/python_openai_chatbot.png" alt="" />
                  <div>
                    <h2 className='article-box1'><a className='a-box1' href="https://thecodedose.com/blog/creating-your-first-ai-chatbot-using-python/" target='_blank'>Creating Your First AI Chatbot Using Python: A Step-by-Step Guide</a></h2>
                  </div>
              </div>
            </a>
          </article>
          <article className='article-4 art-hov border-r'>
            <a href="https://thecodedose.com/blog/contenteditable-html-a-guide-to-interactive-web-content/" target='_blank'>
              <div>
              <img className='article-img4' src="https://thecodedose.com/assets/content_editable_thumbnail.png" alt="" />
                  <div className='box-text'>
                    <h2 className='article-box1'><a className='a-box1' href="https://thecodedose.com/blog/contenteditable-html-a-guide-to-interactive-web-content/" target='_blank'>Contenteditable HTML: A Guide to Interactive Web Content </a></h2>
                  </div>
              </div>
            </a>
          </article>
        </div>
      </div>
      </>
    )
  }
}

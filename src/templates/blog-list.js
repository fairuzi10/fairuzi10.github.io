import React from 'react'
import Link from 'gatsby-link'
import Pagination from '../components/pagination'
import Wrapper from '../components/wrapper'
import Helmet from 'react-helmet'

const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={`/blog/tag/${tag}/`} key={tag} className='mx-1'>#{tag} </Link>
  ))
  const thumbnail = node.frontmatter.thumbnail ?
    node.frontmatter.thumbnail.childImageSharp.resize.src :
    ''

  return (
    <div key={node.id}>
      <div>{date}</div>
      <h2>
        <Link  to={ `/blog${node.fields.slug}` } className="black-link">
          {title}
        </Link>
      </h2>
      { thumbnail &&
        <div className="py-4 text-center">
          <Link  to={ `/blog${node.fields.slug}` }>
            <img src={thumbnail}></img>
          </Link>
        </div> }
      <div>{description}</div>
      {tagsText}
      <hr className="my-4"/>
    </div>
  )
}

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext
  const postList = group.map(({ node }) => <Post node={node} key={node.id}/>);

  return (
    <Wrapper single>
      <Helmet
        title='Blog'
        meta={[
          { name: 'description', content: 'Kumpulan cerita milik Muhammad Fairuzi Teguh tentang olimpiade\
  komputer, Universitas Indonesia, dan lain sebagainya.' },
        ]}
      />
      {postList}
      <div className="d-flex justify-content-center">
        <Pagination index={index} pageCount={pageCount} />
      </div>
    </Wrapper>
  )
}
export default IndexPage

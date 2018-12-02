import React from 'react'
import Link from 'gatsby-link'
import Pagination from '../components/pagination'
import Wrapper from '../components/wrapper'
import Helmet from 'react-helmet'

const Post = ({ node }) => {
  const tags = node.frontmatter.tags.map(tag => (
    <Link to={`/blog/tag/${tag}/`} key={tag} className='mx-1'>#{tag} </Link>
  ))

  return (
    <div key={node.id}>
      <div>{node.frontmatter.date}</div>
      <h2>
        <Link  to={ `/blog${node.fields.slug}` } className="black-link">
          {node.frontmatter.title}
        </Link>
      </h2>
      <div>{node.frontmatter.description}</div>
      {tags}
      <hr className="my-4"/>
    </div>
  )
}

const IndexPage = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext
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

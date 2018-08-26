import React from 'react';
import Link from 'gatsby-link';
import Wrapper from '../components/wrapper'
import Pagination from '../components/pagination'

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

const Page = ({ pathContext }) => {
  const { group, index, pageCount, additionalContext } = pathContext;
  const { tag, totalCount } = additionalContext;
  const postList = group.map(({ node }) => <Post node={node} key={node.id}/>);

  return (
    <Wrapper single>
      <h2>{totalCount} pos dilabeli dengan #{tag}</h2>
      <h5>Lihat <Link to='/blog/tag'>semua label</Link></h5>
      <hr className="my-5"/>
      {postList}
      <div className="d-flex justify-content-center">
        <Pagination index={index} pageCount={pageCount} />
      </div>
    </Wrapper>
  );
};

export default Page;

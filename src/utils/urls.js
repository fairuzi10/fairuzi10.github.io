export const blogUrl = subpath => `${subpath}`
export const blogListUrl = page => `/blog/${page === 1 ? '' : `${page}/`}`
export const blogTagUrl = tag => `/blog/tag/${tag}/`
export const projectUrl = subpath => {
  switch (subpath) {
    case 'jadwal-siak-war':
      return 'https://jadwal-siak-war.fairuzi10.com'
    default:
      return `/project/${subpath}/`
  }
}

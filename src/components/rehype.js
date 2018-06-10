import React from 'react'
import rehypeReact from "rehype-react"
import PotraitImage from "./potrait-image"

export default new rehypeReact({
    createElement: React.createElement,
    components: { "potrait-image": PotraitImage },
  }).Compiler;
import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
    {...props}
  >
    <rect x="5" y="239" rx="10" ry="10" width="223" height="29" />
    <rect x="4" y="400" rx="10" ry="10" width="91" height="32" />
    <rect x="3" y="279" rx="10" ry="10" width="223" height="93" />
    <circle cx="115" cy="115" r="115" />
    <rect x="112" y="388" rx="30" ry="30" width="116" height="54" />
  </ContentLoader>
)

export default PizzaSkeleton
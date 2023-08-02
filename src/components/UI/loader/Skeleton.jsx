import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={570}
        viewBox="0 0 400 570"
        backgroundColor="#e6e6e6"
        foregroundColor="#d6d6d6"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="400" height="3" />
        <rect x="0" y="3" rx="0" ry="0" width="3" height="564" />
        <rect x="397" y="0" rx="0" ry="0" width="3" height="564" />
        <rect x="0" y="567" rx="0" ry="0" width="400" height="3" />
        <rect x="3" y="3" rx="0" ry="0" width="394" height="240" />
        <rect x="40" y="283" rx="0" ry="0" width="318" height="53" />
        <rect x="40" y="356" rx="0" ry="0" width="318" height="120" />
        <rect x="272" y="500" rx="0" ry="0" width="85" height="39" />
    </ContentLoader>
)

export default Skeleton
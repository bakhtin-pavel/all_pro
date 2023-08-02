import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonM = (props) => (
    <ContentLoader
        speed={2}
        width={330}
        height={376}
        viewBox="0 0 330 376"
        backgroundColor="#e6e6e6"
        foregroundColor="#d6d6d6"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="330" height="3" />
        <rect x="0" y="3" rx="0" ry="0" width="3" height="370" />
        <rect x="327" y="0" rx="0" ry="0" width="3" height="370" />
        <rect x="0" y="373" rx="0" ry="0" width="330" height="3" />
        <rect x="3" y="3" rx="0" ry="0" width="324" height="197" />
        <rect x="30" y="220" rx="0" ry="0" width="268" height="35" />
        <rect x="30" y="265" rx="0" ry="0" width="268" height="58" />
        <rect x="255" y="335" rx="0" ry="0" width="45" height="19" />
    </ContentLoader>
)

export default SkeletonM
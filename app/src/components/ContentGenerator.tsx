import { Content } from "../App"

const ContentGenerator = ({content}: {content: Content}) => {
  return (
    <div className="mx-10 mt-20 mb-10 h-full leading-8">
      <h1 className="text-2xl mb-1">{content.heading}</h1>
      {content.content.map(contentItem => {
        return <>
          {contentItem.heading ? <h2 className="mt-4 mb-1 text-xl">{contentItem.heading}</h2> : null}
          {contentItem.content}
        </>
      })}
    </div>
  )
}

export default ContentGenerator
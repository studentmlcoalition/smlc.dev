export default function Youtube({ id }) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe
        title={id}
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
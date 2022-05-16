import React, {
  useEffect,
  useState,
  useTransition,
  useDeferredValue,
  useMemo,
} from 'react'

function Photos() {
  const [photos, setPhotos] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then(setPhotos)
      .finally(() => setLoading(false))
  }, [])

  // const filterBySearch = (entities, search) =>
  //   entities.filter((item) => item.title.includes(search))

  const filterBySearch = useMemo(
    () => photos.filter((item) => item.title.includes(search)),
    [photos, search],
  )

  const entities = useDeferredValue(filterBySearch)

  const onChange = (e) => {
    // startTransition(() => setSearch(e.target.value))
    setSearch(e.target.value)
  }
  return (
    <div>
      <input type="text" value={search} onChange={onChange} />
      {/* {isPending && <h1>Rendering</h1>} */}
      {!loading ? (
        <ol className="photo_container">
          {entities.map(({ id, title, thumbnailUrl }) => (
            <li key={id}>
              <h3>{title}</h3>
              <img src={thumbnailUrl} alt={title} />
            </li>
          ))}
        </ol>
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  )
}

export default Photos

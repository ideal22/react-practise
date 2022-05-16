import React, {
  useEffect,
  useMemo,
  useState,
  useTransition,
  useDeferredValue,
} from 'react'

function AllComments() {
  // const [isPending, startTransition] = useTransition()
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState('')

  const filterBySearch = useMemo(() => {
    return comments.filter((item) =>
      item.name.concat(item.body).includes(search),
    )
  }, [comments, search])

  const entities = useDeferredValue(filterBySearch)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then(setComments)
  }, [])

  const onChange = (e) => {
    // startTransition(() => setSearch(e.target.value))
    setSearch(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={onChange}
      />
      {/* {isPending && <h1>Rendering</h1>} */}
      <ol>
        {entities.map(({ id, name, body }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </>
  )
}

export default AllComments

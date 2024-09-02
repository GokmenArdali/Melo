import { useState } from "react"
import Homes from "../components/homes/Homes"
import { Upcoming } from "../components/upcoming/Upcoming"
import { latest, recommended, upcome } from "../dummyData"
import { Trending } from "../components/trending/Trending"

function HomePage() {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes/>
      <Upcoming items={items} title='Upcoming Movies'/>
      <Upcoming items={item} title='Latest Movies'/>
      <Trending/>
      <Upcoming items={rec} title='Recommended Movies'/>
    </>
  )
}

export default HomePage
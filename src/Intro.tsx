import { cloneElement, useState } from "react"
import { Footer } from "@pmndrs/branding"

export default function Intro({ children }: any) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen bg ready"} ${clicked && "clicked"}`}>
        <div className="stack">
          <h2>Que me da igual quien gane, lo importante es el espectaculo</h2>
          <a href="#" style={{ textAlign: 'center' }} onClick={() => setClicked(true)}>
            {"Jugar"}
          </a>
        </div>
      </div>
    </>
  )
}

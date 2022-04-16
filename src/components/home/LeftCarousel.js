import React from 'react'
import Carousel from '../carousel/Carousel'
import { Goldp, Transform3D } from '../StyledComponents'

export default function LeftCarousel() {
  return (
    <div
        style={{
          display: "flex",
          maxWidth: "80%",
          margin: "auto",
          perspective: "1000px",
          alignItems: "center",
          // border: "2px solid white",
        }}
      >
        <Transform3D>
          <Carousel scrollAmount={800}>
            <iframe
              title='test'
              src='https://syntheticdesigner.github.io/magic8ball/'
              id='m8bIframe'
              width="350px"
              height="530px"
              style={{ transform: "scale(1)", border: "none" }}
            />
            <iframe
              title='test'
              src='https://syntheticdesigner.github.io/tetris-react/'
              id='m8bIframe'
              height='480px'
              width='80%'
              style={{ transform: "scale(1)", border: "none" }}
            />
          </Carousel>
        </Transform3D>
        <div style={{ width: "40%", textAlign: "left" }}>
          <Goldp>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            repellat, quo praesentium corporis laborum odit beatae optio
            exercitationem labore enim et officiis modi reprehenderit ut
            voluptatem quae quaerat illo perspiciatis, ducimus accusamus nisi
            rem. Libero, modi! Dolores sequi reiciendis nobis delectus fugiat,
            aliquam nam libero maxime impedit itaque ea deleniti?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            repellat, quo praesentium corporis laborum odit beatae optio
            exercitationem labore enim et officiis modi reprehenderit ut
            voluptatem quae quaerat illo perspiciatis, ducimus accusamus nisi
            rem. Libero, modi! Dolores sequi reiciendis nobis delectus fugiat,
            aliquam nam libero maxime impedit itaque ea deleniti?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            repellat, quo praesentium corporis laborum odit beatae optio
            exercitationem labore enim et officiis modi reprehenderit ut
            voluptatem quae quaerat illo perspiciatis, ducimus accusamus nisi
            rem. Libero, modi! Dolores sequi reiciendis nobis delectus fugiat,
            aliquam nam libero maxime impedit itaque ea deleniti?
          </Goldp>
        </div>
      </div>
  )
}

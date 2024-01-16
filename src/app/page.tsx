"use client"
import Header from '@/components/Header/header'
import Section from '@/components/Sections/section'

export default function Home() {
  return (
    <>
      <Header/>
      <Section id="section1" title="PC TOP" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque provident officiis inventore, rem eos consequatur doloribus quo adipisci eius corrupti, voluptatibus illo repellat. Molestiae atque architecto esse adipisci saepe!" />
      <Section id="section2" title="PC + OU -" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque provident officiis inventore, rem eos consequatur doloribus quo adipisci eius corrupti, voluptatibus illo repellat. Molestiae atque architecto esse adipisci saepe!" />
      <Section id="section3" title="PC da Crise" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque provident officiis inventore, rem eos consequatur doloribus quo adipisci eius corrupti, voluptatibus illo repellat. Molestiae atque architecto esse adipisci saepe!" />
      
    </>
  )
}

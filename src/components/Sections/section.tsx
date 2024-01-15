import styled from "styled-components"

const TagSection = styled.section`
    display: flex;
    min-height: 100vh;
    background-color: #101018;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    color: white;
`

export default function Section() {
    return (
        <TagSection>
            <Content>
                <Description>
                    <h1>TechGamer Consulting</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat eveniet eligendi facere rem praesentium enim iure dolore provident quas quidem vel minima, 
                        cumque pariatur, accusantium beatae veritatis. Sapiente, doloremque rem.
                    </p>
                </Description>
                <div>
                    <img src="/pcGamer.png" alt="pcGamer" width={400} height={400}/>
                </div>
            </Content>
        </TagSection>
    )
}
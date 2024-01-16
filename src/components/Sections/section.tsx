/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"

interface SectionProps {
    id: string;
    title: string;
    content: string;
    }

const TagSection = styled.section`
    display: flex;
    min-height: 100vh;
    background-color: #171614;
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

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
    return (
        <TagSection id={id}>
            <Content>
                <Description>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </Description>
                <div>
                    <img src="/pcGamer.png" alt="pcGamer" width={400} height={400}/>
                </div>
            </Content>
        </TagSection>
    )
}

export default Section;
import {useState} from 'react'
import {Container,CardContainer,Header,ImageContainer,FruitsContainer1,Image,Button,SpanElement} from './styled'

const FruitsCounter=()=>{
    
    const [eat,setEat]=useState({mango:0,banana:0})

    const onEatMango=()=>{
        setEat(prevState=>({...prevState,mango:prevState.mango+1}))
        
    }
    const onEatBanana=()=>{
        setEat(prevState=>({...prevState,banana:prevState.banana+1}))
    }
    return(
        <Container>
            <CardContainer>
                <Header>Bob ate <SpanElement>{eat.mango}</SpanElement> mangoes <SpanElement>{eat.banana}</SpanElement>  bananas</Header>
                <ImageContainer>
                    <FruitsContainer1>
                        <Image src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"/>
                        <Button onClick={onEatMango}>Eat Mango</Button>
                    </FruitsContainer1>
                    <FruitsContainer1>
                        <Image src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"/>
                        <Button onClick={onEatBanana}>Eat Banana</Button>
                    </FruitsContainer1>
                </ImageContainer>
            </CardContainer>
        </Container>

    )
}

export default FruitsCounter
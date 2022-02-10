import React from 'react'
import styled from "styled-components"
import Section from './Section';

function Home() {
  return (
      <Container>
        <Section 
            title = "Model S"
            backgroundImg = "model-s.jpg"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"
        />
        <Section 
            title = "Model Y"
            backgroundImg = "model-y.jpg"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"
        />
        <Section 
            title = "Model 3"
            backgroundImg = "model-3.jpg"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"
        />
        <Section 
            title = "Model X"
            backgroundImg = "model-x.jpg"
            description = "Order Online for Touchless Delivery"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"
        />
        <Section 
            title = "Lowest Cost Solar Panels in America"
            backgroundImg = "solar-panel.jpg"
            description = "Money-back guarantee"
            leftBtnText = "Order now"
            rightBtnText = "Learn more"        
        />
        <Section 
            title = "Solar for New Roofs"
            backgroundImg = "solar-roof.jpg"
            description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            leftBtnText = "Order now"
            rightBtnText = "Learn more"        
        />
        <Section 
            title = "Accessories"
            backgroundImg = "accessories.jpg"
            leftBtnText = "Shop now"      
        />
      </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`




import React from 'react'
import styled from 'styled-components'
import Upgrade from './Upgrade'

const User = () => {
  return (
    <UserContainer>
        <Upper>
            <Left>
                <img src="../icons/icons8-user-40.png" alt="" />
            </Left>
            <Right>
                <h3>Test Project</h3>
                <p>Software project</p>
            </Right>
        </Upper>
        <Lower>
            <p>You are on the Free Plan</p>
        </Lower>
        <Upgrade />
    </UserContainer>
  )
}

export default User

const UserContainer = styled.div`
    
`

const Upper = styled.div`
    display: flex;
    flex-direction: row;
`

const Lower = styled.div`
    
`

const Left = styled.div`
    
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    
    h3{
        margin: 0;
    }
`
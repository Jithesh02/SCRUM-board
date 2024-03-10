import React from 'react'
import styled from 'styled-components'

const Upgrade = () => {
  return (
    <UpgradeButton>Upgrade</UpgradeButton>
  )
}

export default Upgrade

const UpgradeButton = styled.button`
    margin-top: 5px;
    border: none;
    background-color: inherit;
    text-transform: uppercase;
    color: #30C5FF;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid #30C5FF;
    padding: 5px 10px;
    border-radius: 25px;
    cursor: pointer;
`
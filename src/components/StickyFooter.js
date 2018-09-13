import React, { Component } from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
border: solid white 1px;
background-color: black;
text-align: center;
position: sticky;
width: 100vw;
height: 8vh;`

class StickyFooter extends Component {
    render() {
        return (
            <div id="contact">
                <FooterStyle >
                    <div>
                        Footer
                    </div>
                </FooterStyle>
            </div>
        )
    }
}

export default StickyFooter
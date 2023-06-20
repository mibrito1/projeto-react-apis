import styled from "styled-components";

export const Tag = styled.div`
background-color: blue;
display: flex;
align-items: center;
justify-content: space-between;
gap: 17px;
padding: 5px 8px;

&.grass{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 91px;
height: 31px;
left: 54px;
top: 68px;

background: #70B873;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}

&.poison{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 99px;
height: 31px;
left: 54px;
top: 26px;

background: #AD61AE;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}
&.fire{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 74px;
height: 31px;
left: 54px;
top: 110px;

background: #F44900;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}
&.flying{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 95px;
height: 31px;
left: 54px;
top: 152px;

background: #6892B0;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}

&.water{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 97px;
height: 31px;
left: 54px;
top: 194px;

background: #33A4F5;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}
&.bug{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 82px;
height: 31px;
left: 54px;
top: 236px;

background: #316520;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}

&.normal{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 106px;
height: 31px;
left: 54px;
top: 278px;

background: #8A8A8A;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}
&.dark{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

/* position: absolute; */
width: 106px;
height: 31px;
left: 54px;
top: 278px;

background: #8A8A8A;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
}

`

import styled from 'styled-components';

export const FakeLoading = styled.div`
    background-color:#DDD;
    height:${props=> props.height || 20}px;
`;

export const PageArea = styled.div`
display:flex;
margin-top:20px;
.box{
    background-color:#FFF;
    border-radius:5px;
    box-shadow:0px 0px 4px #999;
    margin-bottom:20px;
}
.box--padding{
    padding: 10px;
}
.leftSide{
    flex:1;
    margin-right:20px;

    .adImage{
        width:320px;
        height:320px;
        margin-right:20px;
        
        
        
        .each-slide img{
            display:flex;
            align-items:center;
            justify-content:center;
            background-size:cover;
            height:320px;
            width:320px;
            background-repeat:no-repeat;
            

        }
       
    }

    .adInfos{
        padding: 10px;
        .adName{
            margin-bottom:20px;
        }
        .adDescription{

        }
    }
}
    .rightSide{
        width:250px
    }
`;

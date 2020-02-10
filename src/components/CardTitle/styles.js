import styled from "styled-components";

const CardTitleStyle = styled.div`
  .title-content {
    height: 70px;
    padding: 0 12px;
    font-size: 15px;
    font-weight: 200;
    .sponsored {
      font-size: 10px;
    }
    .diningtype {
      font-size: 10px;
    }
    .name {
      font-size: 25px;
      color: #cc4141;
      font-weight: 700;
    }
    .location {
      font-weight: bold;
    }
    .rating {
      background: green;
      font-weight: 700;
      color: white;
      padding-left: 6px;
      justify-content: center;
      width: auto;
      display: inline-flex;
      border-radius: 5px;
      padding: 3px 10px;
      align-items: center;
    }
  }
`;

export default CardTitleStyle;

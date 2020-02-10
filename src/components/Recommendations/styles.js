import styled from "styled-components";

const HeaderStyle = styled.div`
  .right-content {
    background: #f7f7f0;
    .Maps {
      height: 50px;
      background: white;
    }
    .subtitle {
      font-size: 10px;
      margin: 5px 0;
    }
    .cateory-container {
      background: white;
      padding: 10px;
      margin: 10px 0;
      .card-listings {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
      }
      .card {
        width: 30%;
        margin: 0 5px;
      }
    }
  }
`;

export default HeaderStyle;

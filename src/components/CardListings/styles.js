import styled from "styled-components";

const CardListingStyle = styled.div`
  .card-listings {
    .card {
      margin: 0 10px 10px;
      background: white;
    }
    .ant-card-head {
      padding: 0;
    }
    .ant-card-grid {
      padding: 0;
    }
    .card-body {
      padding: 12px;
    }
    .colored {
      color: blue;
    }
    .small-sized {
      font-size: 10px;
    }
    .ant-card-actions > li {
      margin: 0;
      padding: 12px 0;
    }
  }
`;

export default CardListingStyle;

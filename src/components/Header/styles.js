import styled from "styled-components";

const HeaderStyle = styled.div`
  .header {
    background: rgb(194, 29, 24);
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 999;
    .component-list {
      padding: 0 40px;
      padding-top: 14px;
      .logo {
        font-size: 23px;
        font-weight: 900;
        color: white;
        font-family: Calibri;
      }
      .search-box {
        .location-icon {
          position: absolute;
          z-index: 1;
          top: 5px;
          padding-left: 5px;
        }
        .ant-select-selection--single .ant-select-selection__rendered {
          margin-right: 24px;
          margin-left: 24px;
        }
        .ant-select {
          width: 90%;
        }
      }

      .button-class {
        padding-left: 10px;
      }
      .profile {
        .badge-icon {
          position: absolute;
          z-index: 1;
          top: 5px;
          padding-left: 5px;
        }
        .ant-select-selection {
          background: rgb(173, 51, 46);
        }
        .ant-select-selection--single .ant-select-selection__rendered {
          margin-right: 24px;
          margin-left: 34px;
        }
        .ant-select {
          width: 100%;
        }
      }
    }
  }
`;

export default HeaderStyle;

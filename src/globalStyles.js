import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Ubuntu', sans-serif;
    }
    .justify-content-around{
        justify-content: space-around;
    }
    .img-principio{
        width:43rem;
    }
    .img-principio-container{
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        position: relative;
        left: -23px;
    }
    .z-index-element{
        z-index:1;
    }
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Ubuntu', sans-serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }
   
    p {
        color: #343D48;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
    .img-fluid{
        object-fit:contain;
        margin-left:-3rem;
    }
    .logo-height{
        height:170px;
    }
    .video-container{
        justify-content: center;
    }
    .mt-2{
        margin-top:4rem;
    }
    .w-100{
        width:100%;
    }
    .video-container-player{
        width:700px !important;
    }
    .column-reverse{
        flex-direction: row !important;
    }
    .img-footer{
        object-fit: cover !important;
    }
    .fuente{
    }
    .mt-3{margin-top: -2rem !important;}
    @media only screen and (max-width: 720px) {
        .video-container-player{
            width:100% !important;
        }
        .column-reverse{
            flex-direction: column-reverse !important;
        }
        .img-principio{
            width:100%;
        }
        .mt-3{margin-top: 0px !important;}
      }
`;

export default Styles;

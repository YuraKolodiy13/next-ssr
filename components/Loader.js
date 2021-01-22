import React from 'react'

const Loader = () => (
  <div className='Loader lds-css ng-scope'>
    <div className="lds-eclipse">
      <div/>
    </div>
    <style jsx>
      {`
        @keyframes lds-eclipse {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes lds-eclipse {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        .Loader{
          margin: 50px auto 0;
          display: flex;
          justify-content: center;
        }
        .lds-eclipse {
          position: relative;
        }
        .lds-eclipse div {
          position: absolute;
          -webkit-animation: lds-eclipse 1s linear infinite;
          animation: lds-eclipse 1s linear infinite;
          width: 80px;
          height: 80px;
          top: 20px;
          left: 20px;
          border-radius: 50%;
          box-shadow: 0 4px 0 0 #337ab7;
          -webkit-transform-origin: 40px 41px;
          transform-origin: 40px 41px;
        }
        .lds-eclipse {
          width: 100px !important;
          height: 100px !important;
          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        }
      `}
    </style>
  </div>
);

export default Loader
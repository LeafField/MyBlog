(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{3553:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return _page_}}),__webpack_require__(7294);var next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),jsx_runtime=__webpack_require__(5893),component_Pagination=function(_ref){var page=_ref.page;return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"/page/".concat(page),children:page})})},page_module=__webpack_require__(9429),page_module_default=__webpack_require__.n(page_module),__N_SSG=!0,_page_=function(_ref){var viewPost=_ref.viewPost,nowArryCount=_ref.nowArryCount,maxPage=_ref.maxPage,pagination=_ref.pagination;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:nowArryCount}),viewPost.map(function(_ref2){var id=_ref2.id,title=_ref2.title,date=_ref2.date,thumbnail=_ref2.thumbnail;return(0,jsx_runtime.jsx)("article",{children:(0,jsx_runtime.jsxs)(link_default(),{href:"/posts/".concat(id),children:[(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsx)("p",{children:date}),(0,jsx_runtime.jsx)("img",{src:"".concat(thumbnail),alt:""})]})},id)}),(0,jsx_runtime.jsxs)("div",{className:page_module_default().pagination,children:[1!==nowArryCount&&(0,jsx_runtime.jsx)(link_default(),{href:"/page/".concat(nowArryCount-1),children:"前へ"}),pagination.map(function(page){return(0,jsx_runtime.jsx)(link_default(),{href:"/page/".concat(page),children:(0,jsx_runtime.jsx)(component_Pagination,{page:page})},page)}),nowArryCount!==maxPage&&(0,jsx_runtime.jsx)(link_default(),{href:"/page/".concat(nowArryCount+1),children:"次へ"})]})]})}},6386:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[page]",function(){return __webpack_require__(3553)}])},9429:function(module){module.exports={pagination:"page_pagination__Nby7b"}}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=6386)}),_N_E=__webpack_require__.O()}]);
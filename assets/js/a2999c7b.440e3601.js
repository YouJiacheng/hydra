"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8062],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,g=d["".concat(a,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76779:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"testing",title:"Testing",sidebar_label:"Testing"},l=void 0,p={unversionedId:"development/testing",id:"development/testing",title:"Testing",description:"Hydra uses nox - a build automation tool - to manage tests, linting, code coverage, etc.",source:"@site/docs/development/testing.md",sourceDirName:"development",slug:"/development/testing",permalink:"/docs/development/testing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/development/testing.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1659458642,formattedLastUpdatedAt:"8/2/2022",frontMatter:{id:"testing",title:"Testing",sidebar_label:"Testing"},sidebar:"docs",previous:{title:"Developer Guide Overview",permalink:"/docs/development/overview"},next:{title:"Style Guide",permalink:"/docs/development/style_guide"}},d=[{value:"Testing with pytest",id:"testing-with-pytest",children:[],level:2},{value:"Testing with nox",id:"testing-with-nox",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra uses ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/theacodes/nox"},"nox")," - a build automation tool - to manage tests, linting, code coverage, etc.\nThe command ",(0,i.mdx)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. List the sessions using ",(0,i.mdx)("inlineCode",{parentName:"p"},"nox -l")," and\nrun specific sessions with ",(0,i.mdx)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),(0,i.mdx)("h2",{id:"testing-with-pytest"},"Testing with pytest"),(0,i.mdx)("p",null,"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"pytest plugins/NAME")," (The plugin must be installed)."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Some plugins support fewer versions of Python than the Hydra core."))),(0,i.mdx)("h2",{id:"testing-with-nox"},"Testing with nox"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8"')," will test plugins on Python 3.8."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8"')," will test plugins on Python 3.8.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"noxfile.py")," is checking some environment variables to decide what to run. For example,\nto test a single plugin:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"{4}","{4}":!0},"$ PLUGINS=hydra_colorlog nox -s test_plugins-3.8\nOperating system        :       Linux\nNOX_PYTHON_VERSIONS     :       ['3.6', '3.7', '3.8', '3.9']\nPLUGINS                 :       ['hydra_colorlog']\nSKIP_CORE_TESTS         :       False\nFIX                     :       False\nVERBOSE                 :       0\nINSTALL_EDITABLE_MODE   :       0\nnox > Running session test_plugins-3.8\n...\n")))}u.isMDXComponent=!0}}]);
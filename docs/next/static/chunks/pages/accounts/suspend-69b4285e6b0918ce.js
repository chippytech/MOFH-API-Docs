(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{9519:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounts/suspend",function(){return s(7049)}])},250:function(e,n,s){"use strict";var t=s(5893);n.Z={projectLink:"https://github.com/Wallvon/MOFH-API-Docs",docsRepositoryBase:"https://github.com/Wallvon/MOFH-API-Docs/blob/main",titleSuffix:" \u2013 MyOwnFreeHost API Documentation",nextLinks:!0,prevLinks:!0,search:!0,customSearch:null,darkMode:!0,footer:!0,footerText:"MIT ".concat((new Date).getFullYear()," \xa9 Robert S."),footerEditLink:"Edit this page on GitHub",logo:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",height:"40",viewBox:"0 0 259 90",fill:"currentColor",children:(0,t.jsx)("path",{d:"M181.5 8.2c-6 2.1-11.9 7.4-15.2 13.8-2.1 3.8-2.2 5.4-2.3 32.5l-.1 28.5H175V52h22V40h-22v-3.8c0-5.1 3.7-12.2 7.9-14.9 2.5-1.7 4.9-2.3 8.7-2.3h5.4V7l-6.2.1c-3.5 0-7.6.5-9.3 1.1zM200 45v38h10.8l.4-15.9c.3-14.3.5-16.2 2.4-18.8 7.3-9.8 19.5-9.8 26.8 0 1.9 2.6 2.1 4.5 2.4 18.8l.3 15.9H254V65.7c0-14.6-.3-17.8-1.9-21.3-2.4-5.3-7.7-10.5-13.3-13.3-6-2.9-17.2-2.9-22.8-.1-2.2 1.1-4.2 2-4.5 2-.3 0-.5-5.9-.5-13V7h-11v38zM19.2 31.6C13.3 34.5 9.6 38.5 6.6 45c-1.7 3.8-2.1 7-2.4 21.2L3.8 83H16V68.3c0-12.7.3-15.2 2-18.7 2.8-5.7 6.3-7.9 13-8.4 4.5-.3 6.1 0 8.9 2 6.6 4.4 7.6 7.4 7.9 24.5l.4 15.3h10.6l.4-15.9c.3-14.3.5-16.2 2.4-18.8 7.3-9.8 19.5-9.8 26.8 0 1.9 2.6 2.1 4.5 2.4 18.8l.4 15.9h10.9l-.3-18.3-.3-18.3-3.2-4.9c-1.8-2.8-5.5-6.6-8.4-8.5-4.6-3.1-6-3.5-13.1-3.9-9.4-.4-14.6 1.2-20.1 6.3l-3.6 3.3-2.7-2.8c-7-7.3-21.2-9.3-31.2-4.3zM121.4 30.9c-5.2 2.4-11.1 8.3-13.5 13.5-2.9 6.4-2.2 22.9 1 25.6.3.3 1.8 2.1 3.3 4.1 4.2 5.7 11.6 8.9 20.4 8.9 8.6 0 13-1.7 18.9-7.1 6.2-5.7 8.8-12.4 8.3-21.3-.2-4-1.2-8.7-2.2-10.7-2.4-5-7.9-10.4-13.2-12.8-5.8-2.8-17.2-2.8-23-.2zm17.8 11.2c12.4 6.6 12.4 21.5.1 27.8-3.3 1.7-10.4 1.3-14.3-.8-3.8-2-8-8.8-8-13.1 0-4.3 4.2-11.1 8-13.1 3.9-2.1 11-2.5 14.2-.8z"})})}),head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{name:"description",content:"MyOwnFreeHost API Documentation"}),(0,t.jsx)("meta",{name:"og:title",content:"MyOwnFreeHost API Documentation"})]})}},7049:function(e,n,s){"use strict";s.r(n);var t=s(5893),a=s(7829),o=s.n(a),r=s(3805),c=s(250),i=s(1127),u=s.n(i),h=function(e){return(0,r.withSSG)(o()({filename:"suspend.mdx",route:"/accounts/suspend",meta:{},pageMap:[{name:"accounts",children:[{name:"change-password",route:"/accounts/change-password"},{name:"create",route:"/accounts/create"},{name:"meta.json",meta:{create:"Create",suspend:"Suspend",unsuspend:"Unsuspend","change-password":"Change Password"}},{name:"suspend",route:"/accounts/suspend"},{name:"unsuspend",route:"/accounts/unsuspend"}],route:"/accounts"},{name:"authentication",route:"/authentication"},{name:"domains",children:[{name:"check-if-available",route:"/domains/check-if-available"},{name:"get-user-by-domain",route:"/domains/get-user-by-domain"},{name:"get-user-domains",route:"/domains/get-user-domains"},{name:"meta.json",meta:{"check-if-available":"Check if available","get-user-domains":"Get a user's domains","get-user-by-domain":"Get a user by domain"}}],route:"/domains"},{name:"errors",route:"/errors"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction",authentication:"Authentication",accounts:"Accounts",domains:"Domains",errors:"Errors"}}]},c.Z))(e)};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",strong:"strong"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Suspend account"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint suspends the vPanel user account associated with the provided information."}),"\n",(0,t.jsx)(n.h2,{children:"HTTP Endpoint"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST https://panel.myownfreehost.net:2087/xml-api/suspendacct.php"})}),"\n",(0,t.jsx)(n.h2,{children:"Usage"}),"\n",(0,t.jsx)(n.h3,{children:"cURL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -u username:password -d "user=example&reason=My beautiful reason." "https://panel.myownfreehost.net:2087/xml-api/suspendacct.php"\n'})}),"\n",(0,t.jsx)(n.h3,{children:"Python"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\nfrom requests.auth import HTTPBasicAuth\nfrom xml.etree.ElementTree import fromstring, ElementTree # Do this if you only want to get the status code.\n\nurl = \"https://panel.myownfreehost.net:2087/xml-api/suspendacct.php\"\ndata = {'user': 'username', 'reason': 'My beautiful reason.'} # For the username, use the same username you set when creating the account.\n\nresponse = requests.post(url, params=data, auth=HTTPBasicAuth('username', 'password'))\n\nprint(response.text)\n\n# Do this if you only want to get the status code.\ntree = ElementTree(fromstring(response.content))\nroot = tree.getroot()\nfor child in root:\n    print(child[0].text) # The status code (can either be 0 or 1)\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Response"}),"\n",(0,t.jsxs)(u(),{emoji:"\ud83d\udca1",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The above request returns XML structured like this:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<suspendacct>\n    <result>\n        <status>1</status>\n        <statusmsg>\n            <script>if (self['clear_ui_status']) { clear_ui_status(); }<\/script>\n            Changing Shell to /bin/false...Changing shell for username.\n            Shell changed.\n            Locking Password...Locking password for user username.\n            marking user vhosts / databases for suspension.\n            ..\n            ..\n            Completed, this account will be fully suspended in 2 minutes.\n        </statusmsg>\n    </result>\n</suspendacct>\n"})})]})]})};return h?(0,t.jsx)(h,Object.assign({},e,{children:(0,t.jsx)(n,{})})):n()}}},function(e){e.O(0,[510,774,888,179],(function(){return n=9519,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
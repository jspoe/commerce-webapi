"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9515],{73359:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return t},default:function(){return c}});var a=r(87462),p=r(63366),s=(r(15007),r(64983)),o=r(91515),u=["components"],t={},m={_frontmatter:t},d=o.Z;function c(e){var n=e.components,r=(0,p.Z)(e,u);return(0,s.mdx)(d,(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"approvepurchaseorders-mutation"},"approvePurchaseOrders mutation"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"approvePurchaseOrders")," mutation approves one or more purchase orders. The specified purchase orders must have a status of PENDING."),(0,s.mdx)("h2",{id:"syntax"},"Syntax"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    approvePurchaseOrders(\n      input: PurchaseOrdersActionInput!\n    ) {\n      PurchaseOrdersActionOutput\n    }\n}\n")),(0,s.mdx)("h2",{id:"example-usage"},"Example usage"),(0,s.mdx)("p",null,"The following example approves a purchase order."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  approvePurchaseOrders(\n    input: {\n      purchase_order_uids: ["Ng=="]\n    }\n  ) {\n    purchase_orders {\n      number\n    }\n    errors {\n      message\n      type\n    }\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "approvePurchaseOrders": {\n      "purchase_orders": [\n        {\n          "number": "000000006"\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-purchase-order-mutations-approve-md-7ccc3c80b161c27b326d.js.map
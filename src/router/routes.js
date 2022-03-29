export default [
  {
    path: "*",
    redirect: "/ListPedido",
  },
  {
    path: "/ListPedido",
    name: "ERP",
    component: () => import("@/views/ListPedido"),
  }
];

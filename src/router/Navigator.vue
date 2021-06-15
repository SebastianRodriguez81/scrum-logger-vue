<script>
const navRoutes = [
  [
    { nro: 1, name: "Nuevo", icon: "event", label: "Nuevo", to: "/" },
    { nro: 2, name: "PARALAX", icon: "cloud_upload", label: "PAX", to: "/ayer" },
    { nro: 3, name: "Historicos", icon: "alarm", label: "Historicos", to: "/archivo" }
  ],
  [
    { nro: 1, name: "Volver", icon: "replay", label: "Volver", to: "/" },
    { nro: 2, name: "TAB 2", icon: "warning", label: "TAB 2", to: "/test" },
    { nro: 3, name: "TAB 3", icon: "warning_amber", label: "TAB 3", to: "/prueba" },
    { nro: 4, name: "TAB 4", icon: "warning", label: "TAB 4", to: "/prueba2" },
    { nro: 5, name: "TAB 5", icon: "warning_amber", label: "TAB 5", to: "/prueba3" }    
  ]
];

const navRoutesViews = [
  { name: "hoy", viewRoutes: navRoutes[0]},
  { name: "ayer", viewRoutes: navRoutes[0]},
  { name: "archivo", viewRoutes: navRoutes[0]},
  { name: "test", viewRoutes: navRoutes[1]},
  { name: "prueba", viewRoutes: navRoutes[1]},
  { name: "prueba2", viewRoutes: navRoutes[1]},
  { name: "prueba3", viewRoutes: navRoutes[1]},
  { name: "login", viewRoutes: navRoutes[0]},
  { name: "register", viewRoutes: navRoutes[0]},
  { name: "kanban", viewRoutes: navRoutes[1]},
]

export default {
  watch: {
    $route(to, from) {
      console.log(from);
      console.log(to);
      
      this.$store.commit("setRoutes", navRoutesViews.find(navRoutesView => navRoutesView.name.toLowerCase() === to.name.toLowerCase()).viewRoutes);
    },
  },
};
</script>




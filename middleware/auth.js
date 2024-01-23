export default function (context) {
  console.log(context.store.getters.isAuthenticated, "refresh token check");
  console.log("[middleware] auth");
  if (!context.store.getters.isAuthenticated) {
    context.redirect("/admin/auth");
  }
}

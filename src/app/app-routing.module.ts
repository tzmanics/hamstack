import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
  },
  {
    path: "careers",
    loadChildren: () =>
      import("./careers/careers.module").then(m => m.CareersModule)
  },
  {
    path: "publications",
    loadChildren: () =>
      import("./publications/publications.module").then(
        m => m.PublicationsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

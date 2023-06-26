import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {IRoute} from "./interfacces/route.interface";
import {map} from "rxjs";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Redirector';

  private readonly http = inject(HttpClient);

  protected getRoutes$ = this.http.get("assets/routes.json").pipe(
    map((res: any) => res.routes as IRoute[])
  );

  protected navigateTo(url: string) {
    window.location.href = url;
  }
}

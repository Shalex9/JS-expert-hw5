import { Component } from '@angular/core';
// import { RouterModule } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  title: string = 'Найди любимый фильм или фото!';
  left: string = 'Портал поиска фильмов';
  right: string = 'Перейти к карточкам';
}

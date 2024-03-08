import { Component } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}

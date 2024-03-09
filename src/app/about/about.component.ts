import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SidebarComponent, TopnavComponent, HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
